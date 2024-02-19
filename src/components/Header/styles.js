import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 11.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-family: 'Roboto', sans-serif;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5.6rem 2.8rem 2.4rem;
    width: 37.2rem;
    height: 3.4rem;
`;

export const Menu = styled.button`
    width: 2.461rem;
    height: 2.461rem;
    background: none;
    border: none;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    width: 33.2rem;
    height: 2.6rem;
    padding: .4rem 0;
    
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};        
        font-weight: 700;
        font-size: 2.1163rem;
    }
    > p {
        color: ${({ theme }) => theme.COLORS.CYAN};
        margin-top: 0.7rem;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;