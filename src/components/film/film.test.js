import React from 'react';
import renderer from 'react-test-renderer';
import Film from "./film";

it(`Film correctly renders after relaunch`, () => {
  const tree = renderer.create(<Film
    key={0}
    filmInfo={{
      id: 0,
      name: ``,
      posterImage: ``,
      previewImage: ``,
      backgroundImage: ``,
      backgroundColor: ``,
      videoLink: ``,
      previewVideoLink: ``,
      description: ``,
      rating: 0,
      director: ``,
      starring: [],
      runTime: 0,
      genre: ``,
      released: 0,
      isFavorite: false,
    }}
    onHover={ jest.fn() }
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
