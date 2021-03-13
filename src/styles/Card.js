import styled from "styled-components";

const Card = styled.div`
    display: flex;
    justify-content: center;
    max-width: 800px;
    width: 95%;
    padding: 50px 75px;
    border-radius: 5px;
    background: linear-gradient(45deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
    display: flex;
    font-family: 'Open Sans';
    margin: 0 auto;
    box-shadow: 0 0 33px rgba(0, 0, 0, 0.3);
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 25px;
        width: 75%;
    }
    @media (max-width: 500px) {
        width: 95%;
    }
`;

export { Card };