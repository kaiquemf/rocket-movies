import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 22.285rem;
  border-radius: 1.6rem;
  padding: 3.2rem;

  background: ${({ theme}) => theme.COLORS.SOFT_BLUE};

  > h1{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    color: ${({ theme}) => theme.COLORS.WHITE_800};
  }
`