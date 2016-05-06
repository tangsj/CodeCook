import assign from 'object-assign';
import * as types from 'actions/nav';

const initialState = [];

export default function nav(state = initialState, action){
  switch(action.type){
    case types.UPDATE_NAV_INFO:
      return action.nav;
    default:
      return state;
  }
}