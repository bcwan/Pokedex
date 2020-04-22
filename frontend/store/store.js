import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk'

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

// Remember the diagram, the actions hit the middleware before the reducer. 
export default configureStore;