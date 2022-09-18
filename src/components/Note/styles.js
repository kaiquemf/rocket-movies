import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 22.29rem;
  border-radius: 1.6rem;
  padding: 3.2rem;

  border: none;
  background: ${({ theme}) => theme.COLORS.SOFT_BLUE};

    h1{
    text-align: start;
    font-family: 'Roboto Slab', serif;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    color: ${({ theme}) => theme.COLORS.WHITE_800};
  }

   p{
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
   footer{
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`