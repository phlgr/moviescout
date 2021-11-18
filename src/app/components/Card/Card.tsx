import React from 'react';
import styled from 'styled-components';
import ButtonBookmark from '../ButtonBookmark/ButtonBookmark';
import RatingStar from '../ratingStar/RatingStar';
import Typography from '../Typography/Typography';

type Card = {
  title: string;
  genres: string[];
  description: string;
  rating: number;
  imageUrl: string;
};

type CardProps = {
  content: Card;
  display: 'regular' | 'compact' | 'compactWide';
};

export default function Card({ content, display }: CardProps): JSX.Element {
  const { title, genres, description, rating, imageUrl } = content;

  return (
    <CardContainer display={display}>
      <ImageContainer display={display}>
        <Image src={imageUrl} />
        <BookmarkButton>
          <ButtonBookmark />
        </BookmarkButton>
      </ImageContainer>

      <InfoContainer>
        <Typography type="h2">{title}</Typography>
        {display !== 'compact' ? (
          <Rating>{rating}</Rating>
        ) : (
          <ComapctRating>
            <span> {rating} </span>
            <RatingStarContainer>
              <RatingStar fill="full" />
            </RatingStarContainer>
          </ComapctRating>
        )}
        {display === 'regular' && (
          <>
            <Genres>{genres.join(', ')}</Genres>
            <Description>{description}</Description>
          </>
        )}
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.article<Partial<CardProps>>`
  display: grid;
  grid-template-columns: ${({ display }) =>
    display === 'regular' ? '1fr 1fr' : '1fr'};
  gap: 10px;
  max-width: ${({ display }) => (display === 'compactWide' ? '300px' : '100%')};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div<Partial<CardProps>>`
  position: relative;
  width: 100%;
  height: ${({ display }) => (display !== 'compactWide' ? '273px' : '200px')};
  border-radius: 15px;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  display: grid;
`;

const Genres = styled.p`
  font-size: 0.875rem;
`;

const Description = styled.p`
  color: #888888;
  font-size: 0.8125rem;
  margin: 0;
`;

const Rating = styled.div`
  background-color: magenta;
  height: 30px;
  margin: 0;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  color: inherit;
  border: none;
`;

const ComapctRating = styled.p`
  display: flex;
  flex-grow: 1;
  font-size: 1.125rem;
`;

const RatingStarContainer = styled.div`
  width: 1.1rem;
  display: inline-block;
  margin-left: 5px;
  margin-top: 1px;
`;
