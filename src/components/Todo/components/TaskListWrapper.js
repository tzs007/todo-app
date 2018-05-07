import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { IoSadOutline } from 'react-icons/lib/io';
import _ from 'lodash';

import TaskItem from './TaskItem';

const EmptyList = () => (
  <div>
    <p>
      <IoSadOutline size={48} />
    </p>
    <p className="mb-0 text-center text-muted">
      === Your task list is empty ===
    </p>
  </div>
);

export default class TaskListWrapper extends Component {
  condition = (filter, list) => {
    if (filter === 'all') {
      const filteredList = [];
      _.map(list, (task, index) => {
        if (task.completed === false || task.completed === true) {
          filteredList.push(
            <TaskItem key={task.id} {...task} {...this.props} index={index} />,
          );
        }
      });
      return filteredList.length === 0 ? <EmptyList /> : filteredList;
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
      return filteredList.length === 0 ? <EmptyList /> : filteredList;
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
      return filteredList.length === 0 ? <EmptyList /> : filteredList;
    }
  };

  render() {
    const { tasks, filter } = this.props;

    return (
      <ListGroup>
        {tasks.length > 0 ? (
          this.condition(filter, tasks)
        ) : (
          <div>
            <p className="text-center">
              <IoSadOutline color="#ccc" size={48} />
            </p>
            <p className="mb-0 text-center text-muted">
              === Your task list is empty ===
            </p>
          </div>
        )}
      </ListGroup>
    );
  }
}
