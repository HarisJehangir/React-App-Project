import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

function CardList(props) {
  const { userList } = props;

  return (
    <div>
      {userList.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  userList: PropTypes.array,
};

export default CardList;
