import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import App from './components/app/app';
import films from './mocks/films';

const init = (filmsList) => {
  ReactDOM.render(
      <App films = {filmsList}/>,
      document.querySelector(`#root`)
  );
};

init.propTypes = {
  filmsList: PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
  ).isRequired,
};

init(films);

