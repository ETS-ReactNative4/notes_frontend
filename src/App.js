import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="jumbotron">
          <h2>Welcome to My Notes</h2>
          <p>You can access your notes list by clicking the link below.</p>
          <Link to="/notes">
            <Button bsStyle="info" bsSize="large" block><h4>My Notes</h4></Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
