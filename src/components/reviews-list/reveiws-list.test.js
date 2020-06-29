import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const REVIEWS = [
  {
    id: 1,
    name: `Max`,
    userPic: `img/avatar-max.jpg`,
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-04-24`
  },
  {
    id: 2,
    name: `Angelina`,
    userPic: `img/avatar-angelina.jpg`,
    rating: 5,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-05-14`
  }
];


it(`ReviewsList renders correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={REVIEWS}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
