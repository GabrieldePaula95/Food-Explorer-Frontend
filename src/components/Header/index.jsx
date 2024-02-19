import { Container, Nav, Logo, Menu } from "./styles";

export function Header(){
    return(
        <Container>
            <Nav>
                <Menu>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z" fill="white"/>
                    </svg>
                </Menu>
                <Logo>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path d="M10.6935 0.5L21.3513 6.65327V18.9598L10.6935 25.1131L0.0357265 18.9598V6.65327L10.6935 0.5Z" fill="#065E7C"/>
                    </svg>
                    <h2>food explorer</h2>
                    <p>admin</p>
                </Logo>
            </Nav>
        </Container>
    )
}