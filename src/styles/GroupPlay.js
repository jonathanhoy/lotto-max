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
        background: rgba(0,0,0,0.4);
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
                padding-right: 0;
                padding: 3px 0;
            }
        }
    }
    @media (max-width: 500px) {
        margin-bottom: 20px;
        .copy-container {
            p:nth-child(1) {
                margin-top: 0;
            }
            p:nth-child(2) {
                margin-bottom: 0;
            }
        }
    }
`;

export { GroupPlay };