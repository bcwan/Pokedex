// applyMiddleware will pass in the store
// this will be invoked for you
const thunk = function(store) {
  // applyMiddleware will pass in next
  // next represents next piece of middleware to receive action
  // Will be invoked for you
	return function(next) {
  	// Action is what WE wrote in our code
    // will be invoked for you
  	return function(action) {
    	if (typeof action === "function") {
      	// invoke the action, aka make AJAX request
        return action(store.dispatch, store.getState);
      }
      return next(action);
    }
  }
} // next is logger

export default thunk;

// const thunkMiddleware = (store) => next => action => {
//     if (typeof action === "function") { 
//         return action(dispatch, getState);
//     } 
//     return next(action); 
// };

// const thunkMiddleware = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }
//   return next(action);
// };

