import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

// Stateless container for About page
export default () => (
  <Card>
    <CardHeader className="text-center">
      <div>
        <img
          src="/images/yoda.svg"
          id="logo"
          className="d-block mx-auto"
          alt=""
        />
      </div>
      <CardTitle>
        Yoda<span className="font-weight-bold">Todo</span>
      </CardTitle>
      <CardSubtitle>About this project</CardSubtitle>
    </CardHeader>
    <CardBody className="text-center">
      <CardText>
        This todo list is made with React, React-Redux and React-Router, and
        presenting some cool features like container and presentational
        components, push into redux store, routing or filtering.
      </CardText>
      <CardText>
        Some extra packages have been imported for better user experience:
      </CardText>
      <ListGroup className="mb-3 mx-auto d-inline-block">
        <ListGroupItem>Reactstrap (Bootstrap 4)</ListGroupItem>
        <ListGroupItem>React Icons</ListGroupItem>
        <ListGroupItem>Moment.js</ListGroupItem>
        <ListGroupItem>Lodash</ListGroupItem>
        <ListGroupItem>and more...</ListGroupItem>
      </ListGroup>
      <CardText>Feel free to use it!</CardText>
    </CardBody>

    <CardFooter className="text-muted text-center">
      <CardText>
        <Link to="/">YodaTodo</Link> | <Link to="/about">About</Link>
      </CardText>
    </CardFooter>
  </Card>
);
