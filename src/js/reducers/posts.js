import * as types from 'actions/posts';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  postlist: Immutable.List(), // 文章目录
  postinfo: Immutable.List()  // 文章详细
});

function postInState(infoArray, postinfo){

  infoArray.map( (info, index) => {
    if(info.get('id') == postinfo.id){
      return true;
    }
  });
  return false;
}

export default (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_POST_LIST:
      return state.merge({
        postlist: action.postlist
      })
    case types.UPDATE_POST_INFO:
      console.log(action.postinfo);

      return state.mergeDeep({
        postinfo: []
      })
      return state;
    default:
      return state;
  }
}