import React from 'react';

import PropTypes from 'prop-types';

const Film = (props) => {
  const title = props.title;
  return <div>
    <p>{title}</p>
    <button onClick={props.onClick}>View Info</button>
  </div>;
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Film;
