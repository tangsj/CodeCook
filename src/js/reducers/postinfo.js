import * as types from 'actions/postinfo';
import Immutable from 'immutable';

const initialState = Immutable.Map(); // 文章详细

export default (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_POST_INFO:
      return state.merge(action.postinfo);
    case types.CLEAR_POST_INFO:
      return state.clear();
    default:
      return state;
  }
}