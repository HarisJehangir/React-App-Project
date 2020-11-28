import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.css';

function Card(props) {
  const { user } = props;

  return (
    <div className="card">
      <div className="initial">{user.name.charAt(0)}</div>
      <h1 className="name">{user.name}</h1>
      <p>@{user.username}</p>
      <a href={user.website}>{user.website}</a>
      <div>
        <Button id={user.id} />
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.object,
};

export default Card;
