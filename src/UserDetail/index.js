import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Loader from '../Loader';

import './styles.css';

function UserDetail(props) {
  const [userDetail, setUserDetail] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then(function (resp) {
        setUserDetail(resp);
      })
      .catch(function () {});
  }, []);

  const showDetail = (userDetail) => (
    <div className="user_detail_wrapper">
      <Link to="/" className="back_link">
        Back to list
      </Link>
      <ul>
        <li>name: {userDetail.name}</li>
        <li>username: {userDetail.username}</li>
        <li>
          <a href="mailto:someone@example.com" className="email">
            email: {userDetail.email}
          </a>
        </li>
        <li>
          phone:
          <a href={`tel:${userDetail.phone}`} className="phone">
            {userDetail.phone}
          </a>
        </li>
        <li>company: {userDetail.company.name}</li>
        <li>website: {userDetail.website}</li>
        <li>
          address:
          <ul>
            <li>street: {userDetail.address.street}</li>
            <li>suite: {userDetail.address.suite}</li>
            <li>city: {userDetail.address.city}</li>
            <li>zipcode: {userDetail.address.zipcode}</li>
          </ul>
        </li>
      </ul>
    </div>
  );

  return userDetail.name ? showDetail(userDetail) : <Loader />;
}

UserDetail.propTypes = {
  id: PropTypes.number,
};

export default UserDetail;
