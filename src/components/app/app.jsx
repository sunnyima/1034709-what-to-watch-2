import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from "../films-list/films-list";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      films
    } = this.props;

    return <FilmsList films={films}/>;
  }
}

App.propTypes = {
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
};

export default App;
