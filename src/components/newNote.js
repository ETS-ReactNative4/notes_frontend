import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import HomeButton from './homeButton';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Panel from 'react-bootstrap/lib/Panel';

class NewNote extends Component{
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
    };
  }

  handleTitle = (event) => {
    this.setState({title: event.target.value});
  }

  handleContent = (event) => {
    this.setState({content: event.target.value});
  }

  addNote = (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
    };
    this.props.dispatch(addNote(newNote));
    this.setState({
      title: '',
      content: '',
    });
  };

  render() {
    return(
      <div className="newNoteForm">
        <form>
          <Panel>
            <h4>New Note</h4>
            <p>Add new note here</p>
            Title:
            <input type='text'
              className="newNote"
              placeholder="New note title"
              style={{width: 400}}
              value={this.state.title}
              onChange={this.handleTitle} />
            <br/>
            Note Content:
            <br/>
            <input type='text'
              className="newNote"
              style={{width: 400, height: 200}}
              placeholder="Input your note here"
              value={this.state.content}
              onChange={this.handleContent} />
            <ButtonToolbar className="button-toolbar">
              <button className="save-button" bsStyle="success" 
                onClick={this.addNote} 
                onSubmit={'/notes'}>
                Save Note
              </button>
              <HomeButton />
            </ButtonToolbar>
          </Panel>
        </form>
      </div>
    );
  }
};
export default connect()(NewNote);
