import styled from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }

  p {
    margin: ${(props) => props.theme.spacings.medium} 0;
  }

  ul,
  ol {
    margin: ${(props) => props.theme.spacings.medium};
  }

  pre {
    width: 100%;
    overflow-x: auto;
    color: ${(props) => props.theme.colors.darkGray};
    background-color: ${(props) => props.theme.colors.lightGray};
    padding: ${(props) => props.theme.spacings.large};
    margin: ${(props) => props.theme.spacings.large} 0;
    line-height: 1.5;
    font-size: ${(props) => props.theme.font.sizes.medium};
    text-align: left;
  }
`;
