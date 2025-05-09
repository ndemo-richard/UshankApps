import { getPost, getPageContent } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  const nameProp = post.properties.Name;
const title =
  nameProp.type === 'title' && nameProp.title.length > 0
    ? nameProp.title[0].plain_text
    : 'Untitled';

  const blocks = await getPageContent(post.id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="prose">
        {blocks.map((block: any) => {
          if (block.type === 'paragraph') {
            return <p key={block.id}>{block.paragraph.rich_text[0]?.plain_text}</p>;
          }
          // Add support for other block types as needed
          return null;
        })}
      </div>
    </div>
  );
}
