import { POSTS_URL } from '../../config/app-config';
import { fetchJson } from '../../utils/fetch-json';

export async function getCountPosts(): Promise<string> {
  const url = `${POSTS_URL}/count`;
  const countOfPosts = await fetchJson<string>(url);
  return countOfPosts;
}
