import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import NoteDetail from './components/NoteDetail';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NewNote from './components/newNote';
import NotesMenu from './components/notesMenu';
import './App.css';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/notes" component={NotesMenu} />
        <Route exact path="/notes/new-note" component={NewNote}/>
        <Route path="/notes/:id" component={NoteDetail} />
      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
