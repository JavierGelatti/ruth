import styled from 'styled-components';

export const SubjectReactionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    background: rgb(0, 0, 0, 0.7);
    height: ${(props) => props.height}rem;
`;

  