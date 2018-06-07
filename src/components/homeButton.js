import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to={'/notes'}>
      <button className="home-button">Home</button>
    </Link>
  );
};

export default HomeButton;
