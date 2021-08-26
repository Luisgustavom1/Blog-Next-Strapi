import { POSTS_URL } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllPosts(query = ''): Promise<PostData[]> {
  const url = `${POSTS_URL}?${query}`;
  const jsonPosts = await fetchJson<PostData[]>(url);
  return jsonPosts;
}
