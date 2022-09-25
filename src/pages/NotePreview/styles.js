import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4rem 10.6rem 0 12.3rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > button{
    align-items: left;
    margin-bottom: 2.4rem;
  }
  > .title-section{
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-bottom: 2.4rem;

    h1{
      font-size: 3.6rem;
      line-height: 4.7rem;
      font-weight: 500;

      color: ${({ theme }) => theme.COLORS.WHITE_900};
    }

    .rating{
      transform: scale(2) rotateY(180deg);
      display: flex;
      margin-top: 1rem;
      margin-left: 4rem;
      margin-right: 0;
      height: 1.2rem;
    }
  }
  .text-btn{
    padding: 4rem 0 2.4rem 0;
  }

  .more-info-section{
    display: flex;
    gap: .8rem;
    align-items: center;

    img{
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND_DARK};
    }

    p{
      font-family: 'Roboto', sans-serif;
      line-height: 1.9rem;
      font-size: 1.6rem;
      font-weight: 400;


      color: ${({ theme }) => theme.COLORS.WHITE_900};
    }

    .time-set{
      display: flex;
      font-size: 1.6rem;
      gap: .8rem;

      svg{
        stroke: ${({ theme }) => theme.COLORS.HARD_BLUE};
      }
    }
  }

  .tags{
    margin-top: 4rem;
  }
`;

export const TextArea = styled.div`
  overflow-y: auto;
  display: flex;
  align-items: center;
  text-align: justify;
  margin-top: 4rem;

  p{
  width: calc(100% - .5rem);
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_900};

  display: -webkit-box;
   -webkit-line-clamp: 20;
           line-clamp: 20; 
   -webkit-box-orient: vertical;
  }

   ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.HARD_BLUE};
    border-radius: 2rem;
  }

`