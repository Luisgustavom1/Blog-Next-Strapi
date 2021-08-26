import React from 'react';
import PostDate from '../PostDate';
import { Container } from './style';

type PostDetails = {
  date: string;
  author: string;
  category: string;
};

const PostDetails = (props: PostDetails) => {
  return (
    <Container>
      Publicado por {props.author} às <PostDate date={props.date} />
      em {props.category}
    </Container>
  );
};

export default PostDetails;
