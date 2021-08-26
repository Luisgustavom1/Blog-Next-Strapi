import styled, { css } from 'styled-components';

export const HeaderStyle = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
