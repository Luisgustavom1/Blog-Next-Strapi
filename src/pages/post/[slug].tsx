import { GetStaticProps, GetStaticPaths } from 'next';
import Post from '../../containers/Post';
import { getCountPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

interface PostDynamicProps {
  post: PostData;
}

export default function PostDynamic({ post }: PostDynamicProps) {
  return (
    <>
      <Post post={post} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postCount = await getCountPosts();
  const posts = await getAllPosts(`_limit=${postCount}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const post = await getPost(ctx.params.slug);
  return {
    props: {
      post: post[0],
    },
    // revalidate: 5
  };
};
