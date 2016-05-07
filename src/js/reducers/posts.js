import assign from 'object-assign';
import * as types from 'actions/posts';

const initialState = {
  postlist: [], // 文章目录
  postinfo: []  // 文章详细
};

export default function nav(state = initialState, action){
  switch(action.type){
    case types.UPDATE_POST_LIST:
      return assign({}, state, {
        postlist: action.postlist
      });
    default:
      return state;
  }
}