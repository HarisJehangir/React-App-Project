import React, { useState, useEffect } from 'react';

import CardList from '../CardList';

function HomePage(props) {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then(function (resp) {
        setuserList(resp);
      })
      .catch(function () {});
  }, []);

  return (
    <div>
      <CardList userList={userList} />
    </div>
  );
}

export default HomePage;
