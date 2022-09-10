import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  padding: .5rem 1.4rem;
  border-radius: .5rem;
  margin-right: .6rem;

  background: ${({ theme }) => theme.COLORS.SOFT_BLUE};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
`