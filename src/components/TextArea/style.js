import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  background: ${({ theme }) => theme.COLORS.INPUT_BG};
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  
  border: none;
  resize: none;

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding: 1.6rem;
  outline: none;

  &::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`