import styled, { css } from 'styled-components';

export const FooterStyle = styled.section`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
  `}
`;
