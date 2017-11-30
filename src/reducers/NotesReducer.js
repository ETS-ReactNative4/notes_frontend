import {
  GET_ALL_NOTES,
  ADD_NOTE
} from '../actions';

export default (notes = [], action) => {
  switch(action.type) {
    case GET_ALL_NOTES:
      return action.payload.data;
    case ADD_NOTE:
      return action.payload.data;
    default:
      return notes;
  }
};
