import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export async function getPost(slug: string | string[]): Promise<PostData[]> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const url = `${POSTS_URL}/?slug=${slugString}`;

  const post = await fetchJson<PostData[]>(url);

  const content = await markdownToHtml(post[0].content);
  const postUpdated = { ...post[0], content };

  return [postUpdated];
}
