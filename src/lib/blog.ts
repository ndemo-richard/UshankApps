import { type PageObjectResponse, type BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from './notion';

// Type guard to check if a result is a full PageObjectResponse
function isFullPage(page: unknown): page is PageObjectResponse {
  return (
    typeof page === 'object' &&
    page !== null &&
    'object' in page &&
    (page as { object?: string }).object === 'page' &&
    'properties' in page
  );
}

// Get all published blog posts
export async function getAllPosts(): Promise<PageObjectResponse[]> {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Published',
      status: {
        equals: 'Live',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return res.results.filter(isFullPage);
}

// Get a single blog post by slug
export async function getPost(slug: string): Promise<PageObjectResponse | null> {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = res.results[0];
  return isFullPage(page) ? page : null;
}

// Get the content blocks for a blog post
export async function getPageContent(pageId: string): Promise<BlockObjectResponse[]> {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });

  // Only return full blocks
  return res.results.filter((block): block is BlockObjectResponse => 'type' in block);
}
