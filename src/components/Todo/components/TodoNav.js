import React from 'react';
import { Link } from 'react-router-dom';
import { CardText } from 'reactstrap';

export default () => {
  return (
    <CardText className="text-center mt-2">
      <Link to="/">All</Link> | <Link to="/undone">Undone</Link> |{' '}
      <Link to="/archive">Archive</Link>
    </CardText>
  );
};
