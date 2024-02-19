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

  > header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: start;

    height: 11.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 2.116rem;
      margin-top: 2.0rem;
    }

    img {
      height: 1.8rem;
      width: 1.8rem;
      margin: 2.0rem 1.6rem 0 2.8rem;
    }
  }
`;

export const Main = styled.form`
  display: flex;
  flex-direction: column;
  margin: 3.6rem 2.8rem 1.4rem;

  > div:first-child{
    margin-bottom: 3.6rem;
  }

  > button {
    text-align: start;
    border: none;
    background: transparent;
    font-size: 2.4rem;
    line-height: 140%;
    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-bottom: 1px solid #192227;
  }
`;