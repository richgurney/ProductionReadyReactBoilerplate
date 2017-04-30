import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import boilerplateReducer from './BoilerplateReducer';

export default combineReducers({
  form: formReducer,
  boilerplate: boilerplateReducer
});
