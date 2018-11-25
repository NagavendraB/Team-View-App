import React from 'react';
import PropTypes from 'prop-types';

const ShowAll = (props) => (
  <div className="show-more-strip" onClick={props.onClickShowAll}>
    SHOW ALL
  </div>
)

ShowAll.propTypes = {
  onClickShowAll: PropTypes.func
};

export default ShowAll;

