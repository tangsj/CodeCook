import * as types from 'actions/posts';
import Immutable from 'immutable';

const initialState = Immutable.List(); // 文章目录

export default (state = initialState, action) => {
  switch(action.type){
    case types.RESET_POST_LIST:
      return Immutable.List(action.postlist).sort((va, vb) => {
        return va.id < vb.id ? 1 : -1;
      });
    default:
      return state;
  }
}