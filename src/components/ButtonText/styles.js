import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 2.4rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  cursor: pointer;

  >svg {
    width: 3.2rem;
  }
`;