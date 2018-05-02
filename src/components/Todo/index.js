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
import { TiTimes, TiPlus, TiPencil } from 'react-icons/lib/ti';

import { connect } from 'react-redux';
import { getTasks } from './actions';

class Todo extends Component {
  componentDidMount = () => {
    this.props.getTasks();
  };

  render = () => {
    if (!this.props.tasks) {
      // const { tasks } = this.props;
      const tasks = [
        { id: 1, content: 'Buy a new lightsaber', done: false },
        { id: 2, content: 'Learn the Force', done: false },
        { id: 3, content: 'Kill da Emperor', done: false },
      ];
      return (
        <Card>
          <CardBody>
            <div>
              <img
                src="/images/yoda.svg"
                style={{ width: '70px', height: '70px' }}
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
            <hr />
            <ListGroup>
              {_.map(tasks, (task, id) => (
                <ListGroupItem key={id} className="px-0 py-1 border-0">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <Input
                          addon
                          type="checkbox"
                          value={task.done}
                          checked={!task.done ? 'checked' : ''}
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      value={task.content}
                      placeholder="e.g.: Buy a new lightsaber"
                    />
                    <InputGroupAddon addonType="append">
                      <Button outline color="info">
                        <TiPencil size={20} />
                      </Button>
                    </InputGroupAddon>
                    <InputGroupAddon addonType="append">
                      <Button outline color="danger">
                        <TiTimes size={20} />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </ListGroupItem>
              ))}
            </ListGroup>
            <hr />
            <InputGroup>
              <InputGroupAddon addonType="prepend">New task:</InputGroupAddon>
              <Input />
              <InputGroupAddon addonType="append">
                <Button color="success">
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
          <div className="loading d-inline-block">&nbsp;</div> Loading
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
