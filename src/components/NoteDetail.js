import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, deleteNote } from '../actions';
import Panel from 'react-bootstrap/lib/Panel';
import HomeButton from './homeButton';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
//fix date formatting- use FormatJS (https://github.com/yahoo/react-intl/wiki#the-react-intl-package)
//fix formatting note content display

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
          {/* <p>{new Intl.DateTimeFormat('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format((this.props.selectedNote.created_at.toString()))}
          </p> */}
        </Panel>
        <div className="button-toolbar">
          <ButtonToolbar>
            <HomeButton />
            <button className="delete-button"
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
