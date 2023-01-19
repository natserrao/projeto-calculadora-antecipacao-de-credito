import styled from "styled-components";

export const DivResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-color: rgba(209, 220, 227, 0.48);
    padding-top: 3rem;

    @media (min-width: 320px) and (max-width: 480px) {
        width:50vw;
        flex-direction: column;
        background-color: var(--color-gray);
        border-radius: 4px;
        padding: 1rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    }

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--color-blue-strong);
        border-bottom: 1px solid var(--color-blue-light);
    }

    /* div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
    } */
    p{
        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--color-title);
    }

    span{

        font-family: 'Source Sans Pro', sans-serif;
        font-style: italic;
        font-weight: 700;
        color: var(--color-title);
    }

`;