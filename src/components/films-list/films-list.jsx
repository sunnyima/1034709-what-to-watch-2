import React from 'react';

import PropTypes from 'prop-types';
import Film from '../film/film';

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: {},
    };
  }

  render() {
    const {
      films,
    } = this.props;

    return films.map((oneFilm) =>{
      return <Film key={oneFilm.id} filmInfo={oneFilm} onHover={()=>{
        this.setState(() => {
          return {
            selectedFilm: oneFilm,
          };
        });
      }}/>;
    });
  }
}


FilmsList.propTypes = {
  films: PropTypes.arrayOf(
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
  selectedFilm: PropTypes.shape({
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
};

export default FilmsList;
