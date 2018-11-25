import React from 'react';
import PropTypes from 'prop-types';

import { TeamMember, AddMember } from '../index';

const TeamViewList = (props) => (
  <div className="team-view-list">
    <AddMember
      searchResults={props.searchResults}
      isAddClicked={props.isAddClicked}
      onAddMember={props.onAddMember}
      onSelectMember={props.onSelectMember}
      onSearchMember={props.onSearchMember} />
    {props.selectedTeam && props.selectedTeam.map(member => 
      <TeamMember 
        role={member.role}
        username={member.username}
        onRemoveMember={() => props.onRemoveMember(member)} />
    )}
  </div>
)

TeamViewList.propTypes = {
  searchResults: PropTypes.array,
  selectedTeam: PropTypes.array,
  isAddClicked: PropTypes.bool,
  onAddMember: PropTypes.func,
  onSelectMember: PropTypes.func, 
  onSearchMember: PropTypes.func,
  onRemoveMember: PropTypes.func
};

export default TeamViewList;

