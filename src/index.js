import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import NoteDetail from './components/NoteDetail';
import NewNote from './components/newNote';
import NotesMenu from './components/notesMenu';

const history = createHistory();
const rmware = routerMiddleware(history);
const reducer = combineReducers({ rootReducer, router: routerReducer });
const store = createStore(reducer, applyMiddleware(ReduxPromise, rmware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/notes" component={NotesMenu} />
        <Route exact path="/notes/new-note" component={NewNote}/>
        <Route path="/notes/:id" component={NoteDetail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
