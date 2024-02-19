import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;
  height: 100vh;
`;

export const Main = styled.main`
  grid-area: content;
  margin: 1.1rem 3.2rem 5.4rem;

  > button:first-child{
    font-size: 1.655rem;
    margin-bottom: 3.5rem;

    > svg {
      width: 2.2rem;
    }
  }

  > form {

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-style: normal;
      font-size: 3.2rem;
      line-height: 140%;
      margin-bottom: 2.4rem;
    }

    h3 {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-style: normal;
      line-height: 100%;
      font-size: 1.6rem;
    }

    #file {
      cursor: pointer;
      text-decoration: none;
      border-radius: 0.5rem;
      width: 100%;
      height: 4.8rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_800};      
    }
  }
`;