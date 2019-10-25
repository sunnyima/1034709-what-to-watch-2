import React from 'react';

import PropTypes from 'prop-types';

const film = (props) => {
  const title = props.title;
  return <div>
    <p>{title}</p>
  </div>;
};

film.propTypes = {
  title: PropTypes.string.isRequired,
};

export default film;
