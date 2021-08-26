import React from 'react';
import { formatDate } from '../../utils/format-date';
import { Container } from './style';

type PostDateProps = {
  date: string;
};

const PostDate = ({ date }: PostDateProps) => {
  return <Container>{formatDate(date)}</Container>;
};

export default PostDate;
