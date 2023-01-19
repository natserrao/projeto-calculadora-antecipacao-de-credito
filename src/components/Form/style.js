import styled from "styled-components";

export const DivForm = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    background-color: var(--color-background);
    padding-left: 1.5rem;
    border-radius: 4px;

    @media (min-width: 320px) and (max-width: 480px) {
        width:100%;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
    }

    form{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 0.69rem;

    }

    h2 {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-title);

            @media (min-width: 320px) and (max-width: 480px) {
            text-align: center;
    }

        }

    label {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            color: var(--color-title);
    }

    input {
        border: 1px solid var(--color-gray);
        border-radius: 4px;
        width: 100%;
        height: 1.8rem;
        padding-left: 0.5rem;

        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-title);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    }

    input:focus {
        outline: 0;
        border-color:  var(--color-blue-light);
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
    }
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

    }

    input::placeholder{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 0.8rem;
        font-style: italic;
        font-weight: 400;
        color: var(--color-title);
        text-align: left;
    }

    span{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 10px;
        font-weight: 400;
        color: red;
    }

    button{
            border: 0;
            border-radius: 100px;
            box-sizing: border-box;
            color: #ffffff;
            cursor: pointer;
            height: 6vh;
            background-color: var(--color-blue-strong);
            width: 80%;
            margin: 0 auto;
            transition: 0.4s;
    }

    button:hover{
        background-color: var(--color-title);
        transition: 0.4s;

    }
    .div-botoes{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 90%;

        #botao-timeout{
            border: 0;
            border-radius: 100px;
            box-sizing: border-box;
            color: #ffffff;
            cursor: pointer;
            height: 6vh;
            background-color: red;
            width: 100%;

            font-size: 0.8rem;
            font-weight: 400;
            line-height: 20px;
            font-family: 'Source Sans Pro', sans-serif;
        }

        #botao-delay{
            border: 0;
            border-radius: 100px;
            box-sizing: border-box;
            color: #ffffff;
            cursor: pointer;
            height: 6vh;
            background-color: orange;
            width: 100%;

            font-size: 0.8rem;
            font-weight: 400;
            line-height: 20px;
            font-family: 'Source Sans Pro', sans-serif;
        }
        #botao-internal{
            border: 0;
            border-radius: 100px;
            box-sizing: border-box;
            color: #ffffff;
            cursor: pointer;
            height: 6vh;
            background-color: gray;
            width: 100%;

            font-size: 0.8rem;
            font-weight: 400;
            line-height: 20px;
            font-family: 'Source Sans Pro', sans-serif;
        }


    }
`;