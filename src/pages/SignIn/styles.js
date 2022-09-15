import styled from "styled-components";
import backgroundImg from '../../assets/signin_img.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 23.5rem 15.9rem 31.7rem 13.4rem;

  > h1{
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.HARD_BLUE};
  }

  > p{
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE_700};
    margin-bottom: 3rem;
  }

  > h2{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.WHITE_800};

    margin-bottom: 3rem;
  }
  > button{
    margin-top: 2.4rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  opacity: 0.65;
`