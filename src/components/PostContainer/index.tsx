import React from 'react';
import { Container } from './style';

type PostContainer = {
  content: string;
};

const PostContainer = (props: PostContainer) => {
  return <Container dangerouslySetInnerHTML={{ __html: props.content }} />;
};

export default PostContainer;
