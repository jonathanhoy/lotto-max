import styled from "styled-components";

const Form = styled.form`
    flex: 1 0 0;
    margin-right: 25px;
    .inputs {
        display: flex;
        flex-direction: column;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            label {
                font-size: 1.5rem;
                color: #fff;
                margin-bottom: 5px;
            }
            input {
                font-family: 'Open Sans';
                max-width: 125px;
                padding: 5px 0;
                font-size: 1.5rem;
                text-align: center;
                border-radius: 5px;
                border: none;
                box-shadow: none;
                background-color: rgba(255,255,255, 0.8);
                /* Chrome, Safari, Edge, Opera */
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                /* Firefox */
                &[type=number] {
                -moz-appearance: textfield;
                }
            }
        }
    }
    .button {
        margin-top: 40px;
        align-self: flex-end;
        button {
            width: 125px;
            background: none;
            border: 2px solid white;
            font-size: 1rem;
            padding: 1rem 1.5rem;
            border-radius: 50px;
            color: white;
            font-family: 'Open Sans';
        }
    }
    @media (max-width: 500px) {
        margin-right: 0;
        .inputs {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                flex-direction: column;
                align-items: flex-start;
                label {
                    font-size: 1.5rem;
                }
                input {
                    padding: 5px 0;
                }
            }
            div:nth-child(1) {
                width: 100%;
                input {
                    width: 100%;
                    max-width: 100%;
                }
            }
            div:nth-child(2) {
                width: calc(50% - 10px);
                margin-right: 10px;
                input {
                    width: 100%;
                    max-width: 100%;
                }
            }
            div:nth-child(3) {
                width: calc(50% - 10px);
                margin-left: 10px;
                input {
                    width: 100%;
                    max-width: 100%;
                }
            }
        }
        .button {
            width: 100%;
            margin: 10px 0;
            button {
                width: 100%;
                font-size: 1.25rem;
            }
        }
    }
`;

export { Form };

// /* CSS HEX */
// --green-blue-crayola: #248AC5ff;
// --blue-green: #2D95B6ff;
// --cadet-blue: #35A0A8ff;
// --keppel: #3EAC99ff;
// --mint: #47B78Aff;
// --emerald: #4FC27Cff;
// --emerald-2: #58CD6Dff;

// /* CSS HSL */
// --green-blue-crayola: hsla(202, 69%, 46%, 1);
// --blue-green: hsla(194, 60%, 45%, 1);
// --cadet-blue: hsla(184, 52%, 43%, 1);
// --keppel: hsla(170, 47%, 46%, 1);
// --mint: hsla(156, 44%, 50%, 1);
// --emerald: hsla(143, 49%, 54%, 1);
// --emerald-2: hsla(131, 54%, 57%, 1);

// /* SCSS HEX */
// $green-blue-crayola: #248AC5ff;
// $blue-green: #2D95B6ff;
// $cadet-blue: #35A0A8ff;
// $keppel: #3EAC99ff;
// $mint: #47B78Aff;
// $emerald: #4FC27Cff;
// $emerald-2: #58CD6Dff;

// /* SCSS HSL */
// $green-blue-crayola: hsla(202, 69%, 46%, 1);
// $blue-green: hsla(194, 60%, 45%, 1);
// $cadet-blue: hsla(184, 52%, 43%, 1);
// $keppel: hsla(170, 47%, 46%, 1);
// $mint: hsla(156, 44%, 50%, 1);
// $emerald: hsla(143, 49%, 54%, 1);
// $emerald-2: hsla(131, 54%, 57%, 1);

// /* SCSS RGB */
// $green-blue-crayola: rgba(36, 138, 197, 1);
// $blue-green: rgba(45, 149, 182, 1);
// $cadet-blue: rgba(53, 160, 168, 1);
// $keppel: rgba(62, 172, 153, 1);
// $mint: rgba(71, 183, 138, 1);
// $emerald: rgba(79, 194, 124, 1);
// $emerald-2: rgba(88, 205, 109, 1);

// /* SCSS Gradient */
// $gradient-top: linear-gradient(0deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-right: linear-gradient(90deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-bottom: linear-gradient(180deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-left: linear-gradient(270deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-top-right: linear-gradient(45deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-bottom-right: linear-gradient(135deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-top-left: linear-gradient(225deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-bottom-left: linear-gradient(315deg, #248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);
// $gradient-radial: radial-gradient(#248AC5ff, #2D95B6ff, #35A0A8ff, #3EAC99ff, #47B78Aff, #4FC27Cff, #58CD6Dff);