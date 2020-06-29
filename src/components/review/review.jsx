import React from 'react';

import {getRatingPercents, convertDate} from '../../helpers/helpers.js';
import ReviewTypes from '../../types/review.js';

const Review = ({review}) => {
  const {
    name,
    userPic,
    rating,
    text,
    date,
  } = review;

  const stars = getRatingPercents(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userPic} width={54} height={54} alt={`${name} avatar`} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: stars}} />
            <span className="visually-hidden">{review.rating}</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{convertDate(date)}</time>
      </div>
    </li>
  );
};

export default Review;

Review.propTypes = {
  review: ReviewTypes.isRequired
};
