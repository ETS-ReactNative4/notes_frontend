import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllNotes } from '../actions';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';
import HomeHeader from './homeHeader';

class NotesMenu extends Component {
  componentDidMount() {
    this.props.getAllNotes();
  };

  render() {
    return (
      <div className="notes">
        <HomeHeader />
        <div className="notes-menu">
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
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllNotes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesMenu);
