import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CounterReducer from './BoilerPlateReducer';

const rootReducer = combineReducers({
  count: CounterReducer
});

export default rootReducer;
