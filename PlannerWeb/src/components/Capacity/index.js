import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

import Item from './Item';
import { DRAG_SOURCE } from '../../constants';
import './styles.css';

const propTypes = {
  isOver: PropTypes.bool,
  connectDropTarget: PropTypes.func,
};
const defaultProps = {
  isOver: false,
  connectDropTarget: () => {},
};

const Capacity = ({ isOver, connectDropTarget }) => connectDropTarget(
  <div className="column column--capacity">
    <div className="column__header">
      <h4 className="column__title">
        Capacity
      </h4>
      <div className="column__headerRight">
        <span className="column__headerAmount">
          9 / 10
        </span>
        <span className="column__headerUnit">
          hours
        </span>
        <button className="column__settings">
          Settings
        </button>
      </div>
    </div>
    <div className="capacity__drop">
      <Item />
      <Item />
      <Item />
      <div className="capacity__buffer">
        Spare
      </div>
      {
        isOver && (<div className="capacity__dropOverlay" />)
      }
    </div>
  </div>
);

const capacityTarget = {
  drop: (props, monitor, component) => {
   return {

   };
  },
  hover: (props, monitor, component) => {
  },
};

Capacity.propTypes = propTypes;
Capacity.defaultProps = defaultProps;

export default DropTarget(DRAG_SOURCE, capacityTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))(Capacity);
