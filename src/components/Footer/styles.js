import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  gap: 3.1rem;
  padding: 2.4rem 3.0rem;

  > p {
    font-family: DM Sans;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
  }

`;

export const Logo = styled.div`
  font-family: Roboto;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
  > svg path{
    fill: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
  }  
`;