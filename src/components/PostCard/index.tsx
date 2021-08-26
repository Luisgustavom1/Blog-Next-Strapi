import Link from 'next/link';
import React from 'react';
import * as PostCardStyle from './styles';

type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

const PostCard = ({ slug, cover, title }: PostCardProps) => {
  return (
    <PostCardStyle.Container>
      <PostCardStyle.PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <img src={cover} alt={title}></img>
        </Link>
      </PostCardStyle.PostCardCover>

      <PostCardStyle.PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </PostCardStyle.PostCardHeading>
    </PostCardStyle.Container>
  );
};

export default PostCard;
