import styled from "styled-components";

export const Container = styled.div`
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0 0;
  padding: 0 12.3rem;
  > h1{
    font-size: 3.2rem;
    line-height: 4.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
    white-space: nowrap;
  }
  > button{
    cursor: pointer;
    width: 20rem;

    transition: all 200ms ease-in-out;
  }
  button:hover{
    filter: opacity(0.8);
  }
`
export const Section = styled.div`
  margin-top: 3.74rem;
  padding: 0 12.3rem;
`