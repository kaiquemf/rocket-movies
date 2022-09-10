import styled from "styled-components";

export const Container = styled.div`
body {
  -webkit-font-smoothing: antialiased;
}

.rating {
  position: absolute;
  height: 30px;
  margin: auto;
  display: block;
  overflow: hidden;
  direction: ltr;
}
.rating:not(:checked) > input {
  display: none;
}


#like:not(:checked) > label {
  cursor:pointer;
  float: right;
  width: 1.4rem;
  height: 1.4rem;
  display: block;
  
  color: ${({ theme }) => theme.COLORS.HEARTS_COLOR_600};
  line-height: 1.2rem;
  text-align: center;
}
#like:not(:checked) > label:hover,
#like:not(:checked) > label:hover ~ label {
  color: ${({ theme }) => theme.COLORS.HEARTS_COLOR_700};
}
#like > input:checked + label:hover,
#like > input:checked + label:hover ~ label,
#like > input:checked ~ label:hover,
#like > input:checked ~ label:hover ~ label,
#like > label:hover ~ input:checked ~ label {
  color: ${({ theme }) => theme.COLORS.HEARTS_COLOR_800};
}
#like > input:checked ~ label {
  color: ${({ theme }) => theme.COLORS.HEARTS_COLOR_900};
}
`