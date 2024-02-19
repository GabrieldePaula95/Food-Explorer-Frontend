import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;