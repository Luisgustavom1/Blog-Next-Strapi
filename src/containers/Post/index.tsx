import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import PostContainer from '../../components/PostContainer';
import Comments from '../../components/Comments';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta name="description" content={`Post ${post.title}`} />
      </Head>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />
        <PostContainer content={post.content} />
        <Comments slug={post.slug} title={post.title} />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
