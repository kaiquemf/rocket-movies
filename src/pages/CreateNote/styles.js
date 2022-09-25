import styled from "styled-components";

export const Container = styled.div`
  
`
export const Content = styled.div`
overflow-y: auto;
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 4rem 12.3rem 0 10.6rem;

  > button:first-child{
    align-self: start;
    margin-bottom: 2.4rem;
  }
  > h1{
    margin-top: 2.4rem;
    font-size: 3.6rem;
    line-height: 4.7rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_800};

    margin-bottom: 4rem;
  }
  .divide-inputs{
    display: flex;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .tags{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding: 1.6rem;
    background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_DARK};
    border-radius: .8rem ;
  }

  .buttons{
    display: flex;
    gap: 4rem;
  }
  .remove-movie-button{
    background: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_DARK};
    color: ${({ theme }) => theme.COLORS.HARD_BLUE};
    font-weight: 400;
  }
`