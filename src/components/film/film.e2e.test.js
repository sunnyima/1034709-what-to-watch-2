import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Film from '../film/film';

Enzyme.configure({adapter: new Adapter()});
it(`Film is able to work`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<Film
    title={`test`}
    onClick={clickHandler}
  />);
  const viewInfoButton = app.find(`button`);
  viewInfoButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
