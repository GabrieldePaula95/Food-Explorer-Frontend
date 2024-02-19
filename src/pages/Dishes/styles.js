import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  height: 100vh;
  max-width: 100%;
  max-height: 100vh;
`;

export const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  margin: 0 5.6rem;

  > button:first-child {
    align-self: start;
    margin: 3.2rem 0 1.6rem 0;
  }

  > button:last-child {
    margin: 4.8rem 0;
  }

  > h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 2.704rem;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.622rem;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }

`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem; 
`;
