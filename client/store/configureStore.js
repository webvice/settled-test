import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
  	// const store = createStore(reducers);

  	const loggerMiddleware = createLogger()
  	const store = createStore(
  	  reducers,
  	    applyMiddleware(
  	      thunkMiddleware, // lets us dispatch() functions
  	      loggerMiddleware // neat middleware that logs actions
  	    )
  	)


  	if (module.hot) {
    	// Enable Webpack hot module replacement for reducers
    	module.hot.accept('../reducers', () => {
      		const nextRootReducer = require('../reducers');
      		store.replaceReducer(nextRootReducer);
    	});
  	}
  	return store;
}