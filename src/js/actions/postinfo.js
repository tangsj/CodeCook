import request from 'superagent';
import Config from 'config';

/**
 * 更新PostInfo 信息
 */
export const UPDATE_POST_INFO = 'update-post-info';
export function updatePostInfo(postinfo){
  return {
    type: UPDATE_POST_INFO,
    postinfo
  }
}

/**
 * 拉取PostInfo list
 */
export function fetchPostInfo(post){
  return (dispatch, getState) => {
    request
      .get(`${Config.postRoot}${post.source}`)
      .set({ Accept: 'text/plain' })
      .end(function(err, response){
        if(!err && response.ok){
         dispatch(updatePostInfo({
          [post.id]: response.text
         }));
        }
      });
  }
}