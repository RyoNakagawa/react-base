import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { reducer as topReducer } from './top';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // rest of your reducers
    top: topReducer,
  });
export default createRootReducer;
