import styled from "styled-components";

const Instructions = styled.section`
    flex: 1 0 0;
    margin-bottom: 30px;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 500px) {
        margin-bottom: 0;
        margin-left: 0;
        margin-top: 10px;
    }
`;

const Copy = styled.div`
    font-style: italic;
    font-size: 0.75rem;
    color: white;
    p {
        margin: 0 auto 10px auto;
    }
`;

export { Instructions, Copy };