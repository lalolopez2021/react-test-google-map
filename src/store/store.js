import { createStore, combineReducers } from 'redux'
import { mapReducer } from '../reducers/mapReducer';

const reducers = combineReducers({
    mapredu: mapReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

