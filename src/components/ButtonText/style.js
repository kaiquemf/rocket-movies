import styled from "styled-components";

export const Container = styled.button`
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.HARD_BLUE : theme.COLORS.GRAY_800};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;
  background: none;
  border: none;
  
  transition: all 200ms ease-in-out;
  &:hover{
    color: ${({ theme }) => theme.COLORS.HARD_BLUE}
  }
`;