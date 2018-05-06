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

// import { connect } from 'react-redux';
// import toggleTask from '../actions';

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

  toggleStatus = e => {
    const completed = e.target.checked;
    this.setState({
      completed, // !this.state.completed
    });

    // this.props.toggleTask(); // action
  };

  render() {
    const { completed, task, id } = this.state;
    const { handleClick } = this.props;

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
                onChange={e => this.toggleStatus(e)}
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
              onClick={e => handleClick(e)}
            >
              <TiTimes size={20} />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="updateTask"
              color="info"
              onClick={e => handleClick(e)}
            >
              Update
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </ListGroupItem>
    );
  }
}
