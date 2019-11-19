import React from 'react';

import PropTypes from 'prop-types';

const Film = (props) => {
  const {name, previewImage} = props.filmInfo;
  return <article className="small-movie-card catalog__movies-card" onMouseEnter={props.onHover}>
    <div className="small-movie-card__image">
      <img srcSet={previewImage} alt={name} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="">{name}</a>
    </h3>
  </article>;
};

Film.propTypes = {
  filmInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    runTime: PropTypes.number,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  onHover: PropTypes.func.isRequired,
};

export default Film;
