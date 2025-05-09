import { APIResponseError } from '@notionhq/client';
import { type PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

import { notion } from './notion';

function isFullPage(page: any): page is PageObjectResponse {
  return page && page.object === 'page' && 'properties' in page;
}

export async function getAllPosts(): Promise<PageObjectResponse[]> {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Published',
      status: {
        equals: "Live",
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
export async function getPageContent(pageId: string) {
  const res = await notion.blocks.children.list({
    block_id: pageId,
  });

  return res.results;
}
