import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  CardText,
} from 'reactstrap';
import _ from 'lodash';
import { TiPlus, TiArrowSync } from 'react-icons/lib/ti';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { getTasks, saveTask } from './actions';

import TaskListWrapper from './components/TaskListWrapper';
import TodoNav from './components/TodoNav';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      filter: 'all',
      visible: true,
    };
  }

  // Get the initial tasklist from store
  componentDidMount = () => {
    this.props.getTasks();
  };

  // Save task on Enter pressed
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleCreateTask();
    }
  };

  // Store the current task text in state
  handleNewTaskInputChange = e => {
    const newTask = e.target.value;
    this.setState({ newTask });
  };

  // Save new task into redux store
  handleCreateTask = () => {
    const { newTask } = this.state;

    if (newTask) {
      const { tasks = [] } = this.props;

      tasks.push({
        id: uuid(),
        task: newTask,
        completed: false,
        timestamp: moment(),
      });

      this.props.saveTask(tasks);
      this.setState({ newTask: '' });
    }
  };

  // Remove new task into redux store
  handleRemoveTask = id => {
    const { tasks } = this.props;
    _.pullAllBy(tasks, [{ id }], 'id');
    const newList = [];
    newList.push(...tasks);
    this.props.saveTask(newList);
  };

  // Toggle task between done and undone
  handleToggleTask = task => {
    const { tasks } = this.props;
    const newList = [];
    newList.push(...tasks);
    newList[task.index].completed = !newList[task.index].completed;
    this.props.saveTask(newList);
  };

  // Update task content
  handleUpdateTask = task => {
    const { tasks } = this.props;
    const newList = [];
    newList.push(...tasks);
    newList[task.index].task = task.task;
    newList[task.index].timestamp = moment();
    this.props.saveTask(newList);
  };

  // Handle list elements by filtering links
  handleFilter = filter => {
    this.setState({ filter });
  };

  // Control alert
  onDismiss = () => {
    this.setState({ visible: false });
  };

  render = () => {
    if (this.props.tasks) {
      const { newTask, filter } = this.state;

      return (
        <Card>
          <CardHeader>
            <div>
              <img
                src="/images/yoda.svg"
                id="logo"
                className="d-block mx-auto"
                alt=""
              />
            </div>
            <CardTitle className="text-center">
              Yoda<span className="font-weight-bold">Todo</span>
            </CardTitle>
            <CardSubtitle className="text-center">
              Do or do not, there's no try!
            </CardSubtitle>
            <TodoNav setFilterTo={this.handleFilter} />
          </CardHeader>
          <CardBody>
            <Alert
              color="success"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              asd
            </Alert>
            <TaskListWrapper
              {...this.props}
              filter={filter}
              handleUpdateTask={this.handleUpdateTask}
              handleToggleTask={this.handleToggleTask}
              handleRemoveTask={this.handleRemoveTask}
            />
            <hr />
            <InputGroup>
              <InputGroupAddon addonType="prepend">New task:</InputGroupAddon>
              <Input
                name="task"
                value={newTask}
                onChange={e => this.handleNewTaskInputChange(e)}
                onKeyPress={this.handleKeyPress}
                placeholder="e.g.: Build a new protocol droid"
              />
              <InputGroupAddon addonType="append">
                <Button
                  name="saveTask"
                  color="success"
                  onClick={this.handleCreateTask}
                  disabled={newTask === '' ? true : false}
                  className={newTask === '' ? 'disallowedPointer' : null}
                >
                  <TiPlus size={20} />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-muted text-center">
            <small>
              Hint: Task content is loaded into an input field, so you can
              change that in place.
            </small>
          </CardFooter>
          <CardFooter className="text-muted text-center">
            <CardText>
              <Link to="/">YodaTodo</Link> | <Link to="/about">About</Link>
            </CardText>
          </CardFooter>
        </Card>
      );
    }

    return (
      <Card>
        <CardBody className="text-center">
          <TiArrowSync /> Loading
        </CardBody>
      </Card>
    );
  };
}

const mapStateToProps = ({ tasks }) => ({
  ...tasks,
});

const mapDispatchToProps = {
  getTasks,
  saveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
