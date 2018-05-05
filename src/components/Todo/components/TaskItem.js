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

export default class TaskItem extends Component {
  render() {
    const { status, task, id, handleClick } = this.props;

    console.log(status, task, id);

    return (
      <ListGroupItem className="px-0 py-1 border-0">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input
                addon
                name="toggle"
                type="checkbox"
                //  value={status}
                // checked={status !== false ? 'checked' : ''}
                onClick={e => handleClick(e)}
              />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            // value={task}
            // disabled={status !== false ? 'disabled' : ''}
            placeholder="e.g.: Buy a new lightsaber"
          />
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="remove"
              color="danger"
              onClick={e => handleClick(e)}
            >
              <TiTimes size={20} />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button
              outline
              name="update"
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
