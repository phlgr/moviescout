import React from 'react';
import styled from 'styled-components';
import ButtonBookmark from '../ButtonBookmark/ButtonBookmark';
import Typography from '../Typography/Typography';

type Card = {
  title: string;
  display: 'regular' | 'compact' | 'compactWide';
};

type CardProps = {
  content: Card;
};

export default function Card({ content }: CardProps): JSX.Element {
  const { title, display } = content;

  return (
    <CardContainer display={display}>
      <ImageContainer>
        <Image></Image>
        <ButtonBookmark />
      </ImageContainer>
      <InfoContainer>
        <Typography type="h2">{title}</Typography>
        <Rating></Rating>
        <Genres></Genres>
        <Description></Description>
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.article<Partial<Card>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.display === 'regular' ? '1fr 1fr' : '1fr'};
`;

const Image = styled.image``;

const ImageContainer = styled.div``;

const InfoContainer = styled.div``;

const Genres = styled.p``;

const Description = styled.p``;

const Rating = styled.div`
  background-color: red;
  height: 30px;
`;
