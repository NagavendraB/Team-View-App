import React from 'react';
import PropTypes from 'prop-types';

const RemoveMember = (props) => (
  <div className="user-icon">
    <span 
      className="close" 
      onClick={props.onRemoveMember}>+</span>
  </div>
);

RemoveMember.propTypes = {
  onRemoveMember: PropTypes.func
};

export default RemoveMember;

