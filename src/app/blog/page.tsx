// app/blog/page.tsx
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => {
          const title = post.properties.Name.title[0]?.plain_text;
          const slug = post.properties.Slug.formula?.string;

          return (
            <li key={post.id}>
              <Link href={`/blog/${slug}`} className="text-blue-600 hover:underline">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
