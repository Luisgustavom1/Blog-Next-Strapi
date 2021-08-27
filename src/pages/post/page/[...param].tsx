import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import HomePage from '../../../containers/HomePage';
import { getCountPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

interface PageProps {
  posts: PostData[];
  pagination: PaginationData;
}

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  if (!posts.length) {
    return <div>Página não encontrada</div>;
  }

  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const page = Number(ctx.params.param[0]);

  const nextPage = page + 1;
  const previousPage = page + 1;

  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;
  const posts = await getAllPosts(
    `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}`,
  );

  const numberOfPosts = Number(await getCountPosts());
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
  };

  return {
    props: { posts, pagination },
    // revalidate: 5
  };
};
function countAllPosts() {
  throw new Error('Function not implemented.');
}

