import React from 'react';

import PropTypes from 'prop-types';
import film from '../film/film';

const filmsList = (props) => {
  const films = props.films;
  return <div>
    {films.map((oneFilm) => (<film key={oneFilm} title={oneFilm}>{oneFilm}</film>))}
  </div>;
};

filmsList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default filmsList;
