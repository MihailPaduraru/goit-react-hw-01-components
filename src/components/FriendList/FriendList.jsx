// FriendList.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  align-items: center;
`;

const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
