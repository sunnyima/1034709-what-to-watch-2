import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from "./films-list";

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmsList
    films={films}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

