import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: .8rem;
  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.INPUT_BG};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  textarea:focus, input:focus{
    outline: none;
  }

  > input{
    height: 5.6rem;
    width: 100%;
    padding: 1.6rem;
    font-family: 'Roboto Slab', serif;

    color: ${({ theme }) => theme.COLORS.WHITE_900};
    border: 0;
    background: transparent;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
  > svg{
    margin: 1.6rem 0 1.6rem 1.6rem;
  }
`