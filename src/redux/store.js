import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from './reducers';

const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, composeEnchacers(applyMiddleware())
)
export default store