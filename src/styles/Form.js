import styled from "styled-components";

const Form = styled.form`
    max-width: 500px;
    width: 100%;
    background: white;
    padding: 0 100px;
    height: 80vh;
    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        label {
            font-size: 3rem;
        }
        input {
            max-width: 300px;
            font-size: 2.4rem;
            text-align: center;
        }
    }
`;

export { Form };