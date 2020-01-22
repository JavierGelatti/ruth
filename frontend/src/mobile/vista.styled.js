import styled from 'styled-components';

export const MobileContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
    background: silver;
`;

export const MobileUsableArea = styled.div`
    width: 100%;
    overflow-y: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 30%;
    background-image: url(https://images.assetsdelivery.com/compings_v2/lexanda/lexanda1704/lexanda170400030.jpg);
`;

export const SubjectReactionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    background: rgb(0; 0; 0; 0.7);
    height: 6rem;
`;

export const ParticipantsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid grey;
    padding-top: 3rem;
    background-image: url(https://i.pinimg.com/originals/03/19/d9/0319d925a9df9a2f2bdb58604f300710.jpg);
    height: 65%;
`;

export const HeaderContainer = styled.div`
    background: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 5%;
`;

export const ActionContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0; 0; 0; 0.4);
    padding-top: 1rem;
    width: 100%;
    margin-top: 1rem;
    border-top: 1px solid silver;
    height: 25%;
`;

export const SubjectTitleStyle = styled.div`
    color: white; 
    font-size: 2.5rem; 
    font-weight: 700; 
    padding-top: 2rem; 
    text-align: center;
`;
