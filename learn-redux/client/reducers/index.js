import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// make sure it is "routing" and NOT "router"
const rootReducer = combineReducers({posts, comments, routing: routerReducer});


export default rootReducer ;
