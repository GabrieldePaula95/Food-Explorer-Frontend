import styled from "styled-components";

export const Container = styled.section`
    align-items: center;
    max-width: 42.8rem;
    height: 100vh;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Section = styled.section`  
    display: flex;
    align-items: end;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 3.6rem 2.1rem 2.2rem 15.3rem;
    margin: 4.4rem 1.6rem 0 3.6rem;

    border-radius: 0.2917rem;
    max-width: 37.6rem;
    max-height: 12rem;

    
    > div {

        > img {
            position: relative;
            right: 18.3rem;
            top: 8.8rem; 
        }
        > h2 {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 140%; 
        }

        > p {
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 140%;
        }
    }
`;

export const Main = styled.main`
    margin: 6.2rem 0 0 2.4rem;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 2.4rem;
    }
`;

export const Div = styled.div`
    display: flex;
    gap: 1.6rem
`;