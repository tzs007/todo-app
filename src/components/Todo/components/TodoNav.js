import React from 'react';
import { Button } from 'reactstrap';

export default props => {
  return (
    <div className="text-center mt-2">
      <Button color="link" onClick={() => props.setFilterTo('all')}>
        All
      </Button>{' '}
      |
      <Button color="link" onClick={() => props.setFilterTo('undone')}>
        Undone
      </Button>{' '}
      |
      <Button color="link" onClick={() => props.setFilterTo('done')}>
        Archive
      </Button>
    </div>
  );
};
