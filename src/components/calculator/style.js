import styled from "styled-components";

export const SectionStyled = styled.section`

    width: 60vw;
    height: 70vh;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    
    background-color: var(--color-background-center);
    border-radius: 4px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }
`;

export const DivForm = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
    background-color: #FFFFFF;
    padding-left: 1.5rem;

    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 0.8rem;
    }

    h2 {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-title);
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
        height: 1.5rem;
        outline: 0;
        padding-left: 0.5rem;

        font-family: 'Source Sans Pro', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-title);

    }

    span{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 10px;
        font-weight: 400;
        color: red;
    }


     button {
        align-items: center;
        background-color: var(--color-blue-strong);
        border: 0;
        border-radius: 100px;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        height: 6vh;
        width: 100%;
        
        font-size: 1rem;
        font-weight: 400;
        line-height: 20px;
        font-family: 'Source Sans Pro', sans-serif;

        overflow: hidden;
        padding: 0px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        }

        button:hover,
        button:focus { 
        background-color: var(--color-title);
        color: #ffffff;
        }

        button:active {
        background: var(--color-title);
        color: rgb(255, 255, 255, .7);
        }


`;

export const DivResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-color: rgba(209, 220, 227, 0.48);

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--color-blue-strong);
        border-bottom: 1px solid var(--color-blue-light);
        
    }

    ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.5rem;
    }

    li{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--color-blue-strong);
    }

`;