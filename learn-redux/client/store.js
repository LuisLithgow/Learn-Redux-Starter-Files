import { createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root resucer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// create onject for default data
const defaultState = {
  posts: posts,
  comments: comments

  // ES6 version just
  // posts,
  // comments

};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

