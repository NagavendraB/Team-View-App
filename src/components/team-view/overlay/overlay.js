import React from 'react';
import PropTypes from 'prop-types';

import { OverlaySearchInput, OverlayList, OverlayNoResults } from '../../index';

const Overlay = (props) => {
  const isSearchResultsFound = props.searchResults.length > 0;

  return (
    <div className="overlay">
      <OverlaySearchInput onSearchMember={props.onSearchMember} />
      {isSearchResultsFound && 
        <OverlayList 
          searchResults={props.searchResults} 
          onSelectMember={props.onSelectMember} />}
      {!isSearchResultsFound && <OverlayNoResults />}
    </div>
  );
}

Overlay.propTypes = {
  searchResults: PropTypes.array,
  onSelectMember: PropTypes.func,
  onSearchMember: PropTypes.func
};

export default Overlay;

