import { connect, createStore, combineReducers, compose, applyMiddleware } from 'redux';
import settings from './reducers/settings';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	settings: settings
});
	
if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configStore = () => {
	return createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ));
}

export default configStore;