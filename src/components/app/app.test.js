import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app';
import films from '../../mocks/films';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    films={films}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
