import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  padding: 10px;
    margin: 10px;
  align-items: center;
  margin-bottom: 10px;
  border: 2px solid grey;
  width: 200px;
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.p`
  margin: 0;
`;

const FriendListItem = ({ avatar, name, isOnline, ...rest }) => {
  return (
    <ListItem className="item" {...rest}>
      <Status $isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
