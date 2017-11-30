//reducers for any singular note (select, update, delete)
import {
  GET_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE
} from '../actions';

export default (selectedNote = null, action) => {
  switch(action.type) {
    case GET_NOTE:
      return action.payload.data;
    case DELETE_NOTE:
      return action.payload.data;
    case UPDATE_NOTE:
      return action.payload.data;
    default:
      return selectedNote;
  }
};
