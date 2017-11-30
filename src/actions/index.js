import axios from 'axios';

export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTE = 'GET_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

const HEROKU_URL = 'https://lit-lake-67095.herokuapp.com';

export const getAllNotes = () => {
  const promise = axios.get(`${HEROKU_URL}/notes`);
  return {
    type: GET_ALL_NOTES,
    payload: promise
  };
};

export const addNote = (noteData) => {
  const promise = axios.post(`${HEROKU_URL}/notes`, noteData);
  return {
    type: ADD_NOTE,
    payload: promise
  };
};

export const getNote = (id) => {
  const promise = axios.get(`${HEROKU_URL}/notes/${id}`);
  return {
    type: GET_NOTE,
    payload: promise
  };
};

export const deleteNote = (id) => {
  console.log('delete note');
  const promise = axios.delete(`${HEROKU_URL}/notes/${id}`);
  return {
    type: DELETE_NOTE,
    payload: promise
  };
};

export const updateNote = (id, noteData) => {
  const promise = axios.put(`${HEROKU_URL}/notes/${id}`, {
    data: {
      id,
      noteData
    }
  });
  return {
    type: UPDATE_NOTE,
    payload: promise
  };
};
