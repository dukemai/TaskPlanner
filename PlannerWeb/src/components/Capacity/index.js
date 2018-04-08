import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Capacity = ({ }) => (
  <div className="column column--capacity">
    <h4 className="column__title">
      Capacity
    </h4>
    <div className="capacity__drop">
    </div>  
  </div>
);

Capacity.propTypes = propTypes;
Capacity.defaultProps = defaultProps;
export default Capacity;
