import { DiscussionEmbed } from 'disqus-react';
import React from 'react';
import { Container } from './style';

type CommentsProps = {
  title: string;
  slug: string;
};

const Comments = ({ title, slug }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-next-strapi"
        config={{
          url: `/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};

export default Comments;
