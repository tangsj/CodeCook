import * as types from 'actions/postinfo';
import Immutable from 'immutable';

const initialState = Immutable.Map(); // 文章详细

export default (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_POST_INFO:
      // console.log('更新postinfo: ', action.postinfo);
      return state.merge(action.postinfo);
    default:
      return state;
  }
}