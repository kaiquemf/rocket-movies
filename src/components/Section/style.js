import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  margin: 2.8rem 0;

  > h2{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.INPUT_BG};
    
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 2rem;
    font-weight: 400;
  }
`