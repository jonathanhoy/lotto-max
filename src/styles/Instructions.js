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

export { Instructions, Copy, GroupPlay };