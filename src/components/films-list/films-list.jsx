import React from 'react';

import PropTypes from 'prop-types';
import Film from '../film/film';

const clickHandler = () => {
  //
};

const FilmsList = (props) => {
  const films = props.films;
  return <div>
    {films.map((oneFilm) => (<Film
      key={oneFilm}
      title={oneFilm}
      onClick={clickHandler}>
      {oneFilm}
    </Film>))}
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsList;
