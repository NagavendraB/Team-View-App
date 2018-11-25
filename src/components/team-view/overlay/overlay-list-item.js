import React from 'react';
import PropTypes from 'prop-types';

const OverlayListItem = (props) => (
  <li onClick={props.onSelectMember} >
    <span className="user-icon"></span>
    {props.username}
  </li>
);

OverlayListItem.propTypes = {
  username: PropTypes.string,
  onSelectMember: PropTypes.func,
};

export default OverlayListItem;

