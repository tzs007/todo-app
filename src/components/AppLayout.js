import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './AppLayout.css';

import Todo from './Todo';
import About from './About';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  navbarToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <Container
        fluid
        id="appContainer"
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
            <Switch>
              <Route exact path="/" component={Todo} />
              <Route path="/about" component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
