import * as types from 'actions/posts';
import { fromJS, List } from 'immutable';

const initialState = fromJS({
  postlist: List(), // 文章目录
  postinfo: List()  // 文章详细
});

export default (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_POST_LIST:
      return state.merge({
        postlist: action.postlist
      })
    default:
      return state;
  }
}