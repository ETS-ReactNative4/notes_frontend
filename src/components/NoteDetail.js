import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import Panel from 'react-bootstrap/lib/Panel';
// import Button from 'react-bootstrap/lib/Button';
import HomeButton from './homeButton';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class NoteDetail extends Component {
  componentDidMount(){
    this.props.getNote(this.props.match.params.id);
  }

  render(){
    if(this.props.selectedNote === null) return null;
    return(
      <div className="note-detail">
        <Panel>
          <h2>{this.props.selectedNote.title}</h2>
          <p>{this.props.selectedNote.content}</p>
          <p>{`Created on: ${this.props.selectedNote.created_at}`}</p>
        </Panel>
        <div className="button-toolbar">
          <ButtonToolbar>
            <HomeButton />
            <button className="delete-button" bsStyle="danger" 
              onClick={() => {
              console.log(this.props)
              this.props.deleteNote(this.props.selectedNote._id);
              }}>Delete</button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    selectedNote: state.selectedNote
  };
};

export default connect(mapStateToProps, { getNote, deleteNote })(NoteDetail);
