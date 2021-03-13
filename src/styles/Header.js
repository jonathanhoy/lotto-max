import styled from "styled-components";

const Header = styled.header`
    text-align: center;
    margin: 25px 0;
    @media (max-width: 768px) {
        margin: 15px 0;
    }
`;

const PageHeading = styled.h1`
    margin: 0;
    font-family: 'Oswald';
    font-weight: 700;
    font-size: 3rem;
    color: grey;
    background: linear-gradient(45deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export { Header, PageHeading };