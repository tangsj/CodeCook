import Immutable from 'immutable';
import * as types from 'actions/nav';

const initialState = Immutable.List();

export default (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_NAV_INFO:
      return Immutable.List(action.nav);
    default:
      return state;
  }
}