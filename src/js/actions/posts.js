import request from 'superagent';
import Config from 'config';

/**
 * 重置PostList 信息
 */
export const RESET_POST_LIST = 'reset-post-list';
export function resetPostsList(postlist){
  return {
    type: RESET_POST_LIST,
    postlist
  }
}

/**
 * 清空PostList
 */
export const CLEAR_POST_LIST = 'clear-post-list';
export function cleanPostList(){
  return {
    type: CLEAR_POST_LIST
  }
}

/**
 * 拉取PostList info
 */
export function fetchPostList(){
  return (dispatch, getState) => {
    request
      .get(`${Config.dataRoot}posts.json`)
      .end(function(err, response){
        if(!err && response.ok){
          dispatch(resetPostsList(response.body));
        }
      });
  }
}
