import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 13.66rem;

  display: flex;
  align-items: center;
  padding: 0 12.3rem;

  > h1{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.HARD_BLUE};
  }
`