import React from 'react';
import { InfoImage, InfoItemContainer, Texto } from './InfoItemContainer.styled';

const InfoItem = (props) => (
    <InfoItemContainer>
      <InfoImage src={props.src} alt={props.altText} position={props.position} size={props.size}/>
      <Texto> {props.descripcion} </Texto>
    </InfoItemContainer>
);

export default InfoItem;
