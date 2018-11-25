import React from 'react';
import PropTypes from 'prop-types';

const OverlaySearchInput = (props) => <input type="text" className="add-input" onChange={props.onSearchMember} />;

OverlaySearchInput.propTypes = {
  onSearchMember: PropTypes.func
};

export default OverlaySearchInput;

