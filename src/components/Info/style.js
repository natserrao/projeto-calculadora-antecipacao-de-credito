import styled from "styled-components";

export const DivResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background-color: rgba(209, 220, 227, 0.48);
    padding-top: 3rem;

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