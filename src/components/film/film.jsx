import React from 'react';

import PropTypes from 'prop-types';

const Film = (props) => {
  const title = props.title;
  return <div>
    <p>{title}</p>
  </div>;
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Film;
