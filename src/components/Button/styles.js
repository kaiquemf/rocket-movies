import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: .8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-size: 1.6rem;
  line-height: 2.1rem;
  font-family: 'Roboto Slab', serif;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};

  background: ${({ theme }) => theme.COLORS.HARD_BLUE};
`