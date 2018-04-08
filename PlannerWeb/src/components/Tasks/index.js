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
      <h4 className="column__title">
        Tasks
      </h4>
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
