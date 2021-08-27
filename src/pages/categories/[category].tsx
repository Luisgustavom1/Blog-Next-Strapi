import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

type CategoryProps = {
  posts: PostData[];
  category: any;
};

export default function Home({ posts, category }: CategoryProps) {
  return (
    <>
      <HomePage posts={posts} category={category} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query}`,
  );

  return {
    props: { posts, category: ctx.query.category },
  };
};
