import styled from "styled-components";

export const Container = styled.div`
  *{
    font-family: 'Roboto Slab', serif;
  }
  display: flex;
  align-items: center;

  background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.SOFT_BLUE};
  color: ${({theme}) => theme.COLORS.GRAY_800};
  border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_900}` : "none"};

  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button{
    cursor: pointer;
    border: none;
    background: none;
  }
  .button-delete{
    color: ${({theme}) => theme.COLORS.RED};
  }
  .button-add{
    color: ${({theme}) => theme.COLORS.HARD_BLUE};
  }
  
  > input{
    height: 5.6rem;
    width: 100%;
    padding: 3rem;
    color: ${({theme}) => theme.COLORS.WHITE_900};
    background: transparent;
    border: none;

    &::placeholder{
      ${({theme}) => theme.COLORS.GRAY_700}
    }


  }
`