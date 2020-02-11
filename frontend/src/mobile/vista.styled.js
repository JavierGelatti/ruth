import styled from 'styled-components';

export const MobileUsableArea = styled.div(({ fontSize }) => `
    width: 100%;
    overflow-y: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #DDDDDD;
    font-size: ${fontSize}px;
`);

export const TopSectionContainer = styled.div`
    min-height: 14em;
`;

export const LogoHeader = styled.div`
    width: 100%;
    height: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;
`;

export const Logo = styled.img`
    height: 5em;
    width: 5em;
    margin-right: 0.5em;
    object-fit: contain;
`;

export const LogoLabel = styled.div`
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
`;

export const ParticipantsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 20em;
    width: 95%;
    height: 100%;
    border-radius: 40px;
    max-width: 30em;
    //background: #BBBBBB;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBvqFqZpJ08P0JcheadQG6O7Cln-SZauMu9CiqKJzHRKmcOEkY");
    box-shadow: inset 4px 4px 8px #6b6b6b, inset -4px -4px 6px #d4d2d2;
`;

export const ActionContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0.5em;
    width: 100%;
    min-height: 8em;
`;

export const SubjectTitle = styled.div`
    color: grey; 
    font-size: 2em;
    font-weight: 200; 
    padding-bottom: 0.5em;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

export const ActionText = styled.span`
    margin-right: 1em;
`;
