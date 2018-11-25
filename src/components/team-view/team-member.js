import React from 'react';
import PropTypes from 'prop-types';

import { RemoveMember } from '../index';

const TeamMember = (props) => (
  <div className="team-member">
    <RemoveMember onRemoveMember={props.onRemoveMember}/>
    <div className="user-details">
      <div className="user-role">{props.role}</div>
      <div className="user-name">{props.username}</div>
    </div>
  </div>
);

TeamMember.propTypes = {
  role: PropTypes.string,
  username: PropTypes.string, 
  onRemoveMember: PropTypes.func
};

export default TeamMember;

