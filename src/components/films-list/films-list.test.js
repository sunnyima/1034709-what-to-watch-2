import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from "./films-list";
import films from "../../mocks/films";

it(`FilmList correctly renders after relaunch`, () => {
  const tree = renderer.create(<FilmsList
    films={films}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

