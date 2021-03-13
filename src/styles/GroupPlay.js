import styled from "styled-components";

const GroupPlay = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .button-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: rgba(0,0,0,0.5);
        border-radius: 5px;
        width: 100%;
        .copy-container {
            color: #fff;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            button {
                background: none;
                border: none;
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 500px) {
        margin-bottom: 20px;
    }
`;

export { GroupPlay };