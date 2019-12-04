import React from 'react';
import {
  InfoImage, InfoItemContainer, InfoImageContainer, Texto,
} from './InfoItemContainer.styled';

const InfoItem = (props) => (
    <InfoItemContainer>
      <InfoImageContainer>
        <InfoImage src={props.src} alt={props.altText}/>
      </InfoImageContainer>
      <Texto> {props.descripcion} </Texto>
    </InfoItemContainer>
);

export default InfoItem;
