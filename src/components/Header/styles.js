import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 13.66rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.3rem;
  gap: 6.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.HEADER_BORDER};

  > h1{
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.HARD_BLUE};
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > .text-content{
    display: flex;
    flex-direction: column;
    align-items: end;

    strong{
      font-size: 1.4rem;
      line-height: 1.8rem;
      font-weight: 700;
      white-space: nowrap;

      color: ${({ theme }) => theme.COLORS.WHITE_800};
    }
    button{
      cursor: pointer;
      background: none;
      border: none;
      font-family: 'Roboto Slab', serif;
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
  img{
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.HEADER_BORDER};
  }
`