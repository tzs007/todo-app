import React, { Component } from 'react';
import {
  Card,
  CardBody,
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

import { connect } from 'react-redux';
import { getTasks } from './actions';

import TaskItem from './components/TaskItem';
import TodoNav from './components/TodoNav';

class Todo extends Component {
  componentDidMount = () => {
    this.props.getTasks();
  };

  handleClick = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name);
  };

  render = () => {
    if (this.props.tasks) {
      const { tasks } = this.props;

      return (
        <Card>
          <CardBody>
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
            <hr />
            <ListGroup>
              {_.map(tasks, task => (
                <TaskItem
                  key={task.id}
                  handleClick={this.handleClick}
                  {...task}
                />
              ))}
            </ListGroup>
            <hr />
            <InputGroup>
              <InputGroupAddon addonType="prepend">New task:</InputGroupAddon>
              <Input name="task" />
              <InputGroupAddon addonType="append">
                <Button
                  name="create"
                  color="success"
                  onClick={e => this.handleClick(e)}
                >
                  <TiPlus size={20} />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </CardBody>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
