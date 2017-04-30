import _ from 'lodash';
import {
  CREATE_TYPE_HERE
} from '../actions/types';

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TYPE_HERE:
      return _.extend({}, state, {
        count: action.payload.length,
      })
    default:
      return state;
  }
};
