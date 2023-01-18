import styled from "styled-components";

export const SectionStyled = styled.section`

    width: 50vw;
    height: 85vh;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    
    background-color: var(--color-background-center);
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }
`;

