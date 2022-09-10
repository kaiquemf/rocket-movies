import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  
  input{
    width: 100%;
    height: 5.6rem;
    border: none;
    border-radius: 1rem;
    padding: 1.9rem 2.4rem;
    
    background: ${({ theme }) => theme.COLORS.INPUT_BG};
    
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_800}
    }
  }
`