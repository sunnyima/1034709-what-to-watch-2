import React from 'react';
import renderer from 'react-test-renderer';
import Film from "./film";

it(`Film correctly renders after relaunch`, () => {
  const tree = renderer.create(<Film
    title={`test`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
