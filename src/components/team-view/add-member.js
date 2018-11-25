import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Overlay } from '../index';

const AddMember = (props) => {
  const addMemberClassName = classnames("add-team-member", {
    "add-clicked": props.isAddClicked
  });

  return(
    <div className={addMemberClassName}>
      <span className="add-icon" onClick={props.onAddMember}>+</span>
      Add team member to this test
      <Overlay
        searchResults={props.searchResults}
        onSelectMember={props.onSelectMember}
        onSearchMember={props.onSearchMember} />
    </div>
  )
};

AddMember.propTypes = {
  searchResults: PropTypes.array,
  isAddClicked: PropTypes.bool,
  onSelectMember: PropTypes.func,
  onSearchMember: PropTypes.func,
  onAddMember: PropTypes.func
};

export default AddMember;

