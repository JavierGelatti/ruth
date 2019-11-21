import React from 'react';
import { InfoImage, InfoItemContainer } from './InfoItemContainer.styled';

const InfoItem = (props) => (
    <InfoItemContainer>
      <InfoImage src={props.src} alt={props.altText}/>
      <span> {props.descripcion} </span>
    </InfoItemContainer>
);

export default InfoItem;
