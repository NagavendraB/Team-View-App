import React from 'react';
import PropTypes from 'prop-types';

import { OverlayListItem } from '../../index';

const OverlayList = (props) => (
  <ul className="avilable-user-list">
    {props.searchResults && props.searchResults.map(member =>
      <OverlayListItem 
        username={member.username}
        onSelectMember={() => props.onSelectMember(member)} />
    )}
  </ul>
);

OverlayList.propTypes = {
  searchResults: PropTypes.array,
  onSelectMember: PropTypes.func
};

export default OverlayList;

