import styled, { css } from 'styled-components';

export const MainContainerStyle = styled.main`
  ${({ theme }) => css`
    max-width: 960px;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
`;
