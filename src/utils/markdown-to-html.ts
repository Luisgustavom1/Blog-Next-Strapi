import remarkHtml from 'remark-html';
import { remark } from 'remark';

export const markdownToHtml = async (content: string): Promise<string> => {
  const data = await remark().use(remarkHtml).process(content);

  return data.toString();
};
