import request from 'superagent';
import Config from 'config';

/**
 * 更新PostList 信息
 */
export const UPDATE_POST_LIST = 'update-post-list';
export function updatePostsList(postlist){
  return {
    type: UPDATE_POST_LIST,
    postlist
  }
}

/**
 * 拉取PostList info
 */
export function fetchPostList(){
  return dispatch => {
    request
      .get(`${Config.dataRoot}posts.json`)
      .end(function(err, response){
        if(!err && response.ok){
          dispatch(updatePostsList(response.body));
        }
      });
  }
}