import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  ListGroupItem,
} from 'reactstrap';
import { TiTimes } from 'react-icons/lib/ti';
import _ from 'lodash';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      task: props.task,
      completed: props.completed,
    };
  }

  handleInputChange = e => {
    const task = e.target.value;
    this.setState({ task });
  };

  handleRemoveTask = id => {
    console.log('remove');
    const { taskList } = this.state;
    _.pullAllBy(taskList, id);
    this.props.createTask(taskList);
  };

  handleUpdateTask = task => {
    console.log('update');
    /*  const { taskList } = this.state;
     _.pullAllBy(taskList, task);
     this.props.createTask(taskList); */
  };

  handleToggleTask = e => {
    const completed = e.target.checked;
    const { taskList } = this.state;
    this.setState({
      completed, // !this.state.completed
    });

    // this.props.toggleTask(); // action
  };

  render() {
    const { completed, task, id } = this.state;

    return (
      <ListGroupItem className="px-0 py-1 border-0">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input
                addon
                name="toggleTask"
                type="checkbox"
                value={completed}
                checked={completed ? 'checked' : ''}
                onChange={e => this.handleToggleTask(e)}
              />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            value={task}
            onChange={e => this.handleInputChange(e)}
            disabled={completed ? 'disabled' : ''}
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          />
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="removeTask"
              color="danger"
              onClick={() => this.handleRemoveTask(id)}
            >
              <TiTimes size={20} />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="updateTask"
              color="info"
              onClick={e => this.handleUpdateTask(e)}
            >
              Update
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    );
  }
}
