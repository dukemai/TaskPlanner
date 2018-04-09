import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import { DRAG_SOURCE } from '../../constants';

const propTypes = {
  connectDragSource: PropTypes.func,
  isDragging: PropTypes.bool,
};
const defaultProps = {
  connectDragSource: () => {},
  isDragging: false,
};

const TaskItem = ({ connectDragSource, isDragging }) => connectDragSource(
  <div
    className={`
      taskItem
      taskItem--${ isDragging? 'dragging' : 'nonDragging' }
    `}
  >
    <div className="taskItem__left">
      <h4>Visit paris</h4>
      <p>
        Estimate: 1 hour
      </p>
      <p>
        Priority: high
      </p>
    </div>
    <div className="taskItem__right">
      <button className="taskItem__remove">Remove</button>
    </div>  
  </div>  
);

TaskItem.propTypes = propTypes;
TaskItem.defaultProps = defaultProps;

const tasksSource = {
  beginDrag(props) {
    return {
      id: props.id,
      isInbox: props.isInbox,
    };
  },
};

export default DragSource(DRAG_SOURCE, tasksSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(TaskItem);
