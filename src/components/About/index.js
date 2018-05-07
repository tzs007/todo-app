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
} from 'reactstrap';

// Stateless container for About page
export default () => (
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
      <CardSubtitle className="text-center">About this project</CardSubtitle>
    </CardHeader>
    <CardBody>
      <CardText>sdf</CardText>
    </CardBody>

    <CardFooter className="text-muted text-center">
      <CardText>
        <Link to="/">YodaTodo</Link> | <Link to="/about">About</Link>
      </CardText>
    </CardFooter>
  </Card>
);
