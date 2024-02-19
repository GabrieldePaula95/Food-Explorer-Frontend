import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};
    border-radius: 0.8rem;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.4rem;
    min-width: 21.0rem;
    min-height: 29.2rem;
    position: relative;


    > button {
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        background: none;
        border: none;

        > svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }
    > img {
        width: 8.8rem;
    }

    > h2 {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    
    > p {
        color: ${({ theme }) => theme.COLORS.CYAN};        
    }
`;