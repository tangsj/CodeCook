import Immutable from 'immutable';
import * as types from 'actions/tag';

const initialState = Immutable.List();

export default function nav(state = initialState, action){
  switch(action.type){
    case types.UPDATE_TAG_INFO:
      return Immutable.List(action.tag);
    default:
      return state;
  }
}