import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    font-style: italic;
    text-align: left;
  `}
`;
