import React from 'react';
import PropTypes from 'prop-types';

import TaskItem from './TaskItem';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const Tasks = ({ }) => (
    <div className="column column--tasks">
      <div className="column__header">
        <h4 className="column__title">
          Tasks
        </h4>
        <button className="column__add">
          Add
        </button>  
      </div>
      <section className="tasks">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </div>    
);
Tasks.propTypes = propTypes;
Tasks.defaultProps = defaultProps;
export default Tasks;
