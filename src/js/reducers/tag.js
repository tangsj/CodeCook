import assign from 'object-assign';
import * as types from 'actions/tag';

const initialState = [];

export default function nav(state = initialState, action){
  switch(action.type){
    case types.UPDATE_TAG_INFO:
      return action.tag;
    default:
      return state;
  }
}