import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;
export const Header = styled.div`
  width: 100%;
  height: 13.66rem;

  background: ${({ theme}) => theme.COLORS.SOFT_BLUE};

  .content{
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 6.4rem 14.4rem;
    cursor: pointer;

    color: ${({ theme}) => theme.COLORS.HARD_BLUE};

    svg{
      font-size: 1.6rem;
      transition: all 200ms ease-in-out;
    }
    svg:hover{
      opacity: 0.8;
    }

    button{
      background: none;
      border: none;
      cursor: pointer;

      font-family: 'Roboto Slab', serif;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme}) => theme.COLORS.HARD_BLUE};
      transition: all 200ms ease-in-out;
    }
    button:hover{
      opacity: 0.8;
    }
  }
`;

export const Content = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .iNqtCH, .cbdOZb{
    width: 34rem;
  }
  .iNqtCH:nth-child(4){
    margin-top: 2.4rem;
  }
  .iNqtCH:nth-child(5){
    margin-bottom: 2.4rem;
  }
`;
export const Avatar = styled.div`
    position: relative;
    margin: -10rem auto 3.2rem;

  > img{
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.HEADER_BORDER};
  }

  > label{
    width: 4rem;
    height: 4rem;

    background: ${({ theme }) => theme.COLORS.HARD_BLUE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;

    input{
      display: none;
    }
    svg{
      width: 1.8rem;
      height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    }
  }
`;