import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../film/film';

Enzyme.configure({adapter: new Adapter()});
it(`Film is able to work`, () => {
  const clickHandler = jest.fn();
  shallow(<Film
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
    onHover={clickHandler}
  />);
});
