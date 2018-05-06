import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import _ from 'lodash';
import { TiPlus, TiArrowSync } from 'react-icons/lib/ti';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { getTasks, createTask } from './actions';

import TaskItem from './components/TaskItem';
import TodoNav from './components/TodoNav';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      taskList: [],
    };
  }

  componentDidMount = () => {
    this.props.getTasks();
  };

  handleInputChange = e => {
    const newTask = e.target.value;
    this.setState({ newTask });
  };

  handleCreateTask = () => {
    const { taskList } = this.state;

    taskList.push({
      id: uuid(),
      task: this.state.newTask,
      completed: false,
    });

    this.props.createTask(taskList);

    this.setState({
      newTask: '',
    });
  };

  render = () => {
    if (this.props.tasks) {
      const { tasks } = this.props;

      console.log(this.props);

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
            <TodoNav />
          </CardHeader>
          <CardBody>
            <ListGroup>
              {tasks.length > 0 ? (
                _.map(tasks, task => (
                  <TaskItem key={task.id} {...task} {...this.props} />
                ))
              ) : (
                <p className="mb-0 text-center text-muted">
                  === Your task list is empty ===
                </p>
              )}
            </ListGroup>
            <hr />
            <InputGroup>
              <InputGroupAddon addonType="prepend">New task:</InputGroupAddon>
              <Input
                name="task"
                value={this.state.newTask}
                onChange={e => this.handleInputChange(e)}
                placeholder="e.g.: Build a new protocol droid"
              />
              <InputGroupAddon addonType="append">
                <Button
                  name="createTask"
                  color="success"
                  onClick={this.handleCreateTask}
                >
                  <TiPlus size={20} />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
          <CardFooter className="text-muted">
            <small>
              Hint: Task content is loaded into an input field, so you can
              change that in place.
            </small>
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
  createTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
