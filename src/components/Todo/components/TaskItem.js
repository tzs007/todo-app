import React, { Component } from 'react';
import moment from 'moment';
import {
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  ListGroupItem,
} from 'reactstrap';
import { TiTimes } from 'react-icons/lib/ti';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
    };
  }

  handleTaskItemInputChange = e => {
    const task = e.target.value;
    this.setState({ task });
  };

  render() {
    const {
      completed,
      id,
      timestamp,
      index,
      handleUpdateTask,
      handleToggleTask,
      handleRemoveTask,
    } = this.props;
    const { task } = this.state;
    const taskContainer = {
      id,
      task,
      index,
    };

    return (
      <ListGroupItem className="px-0 py-1 border-0">
        <FormText color="muted mt-0">
          {moment(timestamp).format('YYYY MMMM D. HH:mm:ss')}
        </FormText>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input
                addon
                name="toggleTask"
                type="checkbox"
                value={completed}
                checked={completed ? 'checked' : ''}
                onChange={() => handleToggleTask(taskContainer)}
              />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            value={task}
            onChange={e => this.handleTaskItemInputChange(e)}
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
              onClick={() => handleRemoveTask(id)}
            >
              <TiTimes size={20} />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="updateTask"
              color="info"
              onClick={() => handleUpdateTask(taskContainer)}
            >
              Update
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    );
  }
}
