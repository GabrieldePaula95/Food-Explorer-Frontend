import styled from "styled-components";

export const Container = styled.span`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.4rem;
  width: auto;
  padding: 0.4rem .8rem;
  line-height: 2.4rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;