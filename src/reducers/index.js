//combine reducer files
import { combineReducers } from 'redux';
import NotesReducer from './NotesReducer';
import SelectedNoteReducer from './SelectedNoteReducer';

const rootReducer = combineReducers({
  notes: NotesReducer,
  selectedNote: SelectedNoteReducer
});

export default rootReducer;
