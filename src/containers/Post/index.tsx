import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContainer from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';
import Heading from '../../components/Heading';
import PostCover from '../../components/PostCover';

type PostProps = {
  post: PostData;
};

const Post = ({ post }: PostProps): JSX.Element => {
  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      <Footer />
    </>
  );
};

export default Post;
