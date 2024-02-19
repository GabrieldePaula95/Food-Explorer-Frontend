import { FiSearch } from 'react-icons/fi';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 0.8rem;
  border-radius: 0.5rem;
  padding: 1.6rem 1.4rem;

  > input {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > svg {
      margin-left: 1.4rem;
    }
  }
`;