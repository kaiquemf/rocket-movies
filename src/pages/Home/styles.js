import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
overflow-y: hidden;
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
  .function-btn{
    width: 20.7rem;
  }
   > a{
    cursor: pointer;
    width: 20rem;

    transition: all 200ms ease-in-out;
  }
   > a:hover{
    filter: opacity(0.8);
  }
`
export const Section = styled.div`
grid-area: "content";
  margin-top: 3.74rem;
  padding: 0 12.3rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
`