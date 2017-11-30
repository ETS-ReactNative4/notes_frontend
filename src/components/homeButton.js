import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

const HomeButton = () => {
  return (
    <Link to={'/notes'}>
      <Button bsStyle="primary">Home</Button>
    </Link>
  );
};

export default HomeButton;
