import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

function Button(props) {
  const { id } = props;
  return (
    <span className="button">
      <Link to={`${id}`}>More Details</Link>
    </span>
  );
}

Button.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Button;
