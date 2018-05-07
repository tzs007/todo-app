import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { IoHappyOutline } from 'react-icons/lib/io';
import _ from 'lodash';

import TaskItem from './TaskItem';

// Just a stateless component for showing a message on empty tasklist.
const EmptyList = () => (
  <div>
    <p className="text-center">
      <IoHappyOutline color="#ccc" size={48} />
    </p>
    <p className="mb-0 text-center text-muted">
      === Your task list is empty ===
    </p>
  </div>
);

export default class TaskListWrapper extends Component {
  // Filtering tasks by clicking filter links
  renderList = (filter, list) => {
    if (filter === 'all') {
      const filteredList = [];
      _.map(list, (task, index) => {
        if (task.completed === false || task.completed === true) {
          filteredList.push(
            <TaskItem key={task.id} {...task} {...this.props} index={index} />,
          );
        }
      });
      return filteredList.length > 0 ? filteredList : <EmptyList />;
    }

    if (filter === 'undone') {
      const filteredList = [];
      _.map(list, (task, index) => {
        if (task.completed === false) {
          filteredList.push(
            <TaskItem key={task.id} {...task} {...this.props} index={index} />,
          );
        }
      });
      return filteredList.length > 0 ? filteredList : <EmptyList />;
    }

    if (filter === 'done') {
      const filteredList = [];
      _.map(list, (task, index) => {
        if (task.completed === true) {
          filteredList.push(
            <TaskItem key={task.id} {...task} {...this.props} index={index} />,
          );
        }
      });
      return filteredList.length > 0 ? filteredList : <EmptyList />;
    }
  };

  render() {
    const { tasks, filter } = this.props;

    return (
      <ListGroup>
        {tasks.length > 0 ? this.renderList(filter, tasks) : <EmptyList />}
      </ListGroup>
    );
  }
}
