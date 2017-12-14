import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllNotes } from '../actions';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

class NotesMenu extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  };

  render() {
    return (
      <div className="notes">
        <div className="header">
          <h2>My Notes</h2>
        </div>
        <div className="notesMenu">
          <Panel>
            <ListGroup>
              {this.props.notes.map((note, i) => {
                return (
                  <ListGroupItem key={i}>
                    <Link to={`/notes/${note._id}`}>
                      <h4>{note.title}</h4>
                    </Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Panel>
        </div>
        <Link to={`notes/new-note`}>
          <Button bsStyle="info">Add New Note</Button>
        </Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    notes: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllNotes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesMenu);
