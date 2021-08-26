import React, { ReactNode } from 'react';
import { Container } from './style';

type HeadingProps = {
  children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <Container>{children}</Container>;
};

export default Heading;
