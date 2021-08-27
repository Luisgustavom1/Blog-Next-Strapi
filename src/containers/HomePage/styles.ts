import styled from 'styled-components';

export const HomePageStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.sizes.large};
  margin: ${({ theme }) => theme.spacings.medium} 0;
`;
