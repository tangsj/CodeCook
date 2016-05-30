import request from 'superagent';
import Config from 'config';

/**
 * 更新Author 信息
 */
export const UPDATE_AUTHOR_INFO = 'update-author-info';
export function updateAuthor(author){
  return {
    type: UPDATE_AUTHOR_INFO,
    author
  }
}

/**
 * 拉取Author info
 */
export function fetchAuthor(){
  return (dispatch, getState) => {
    request
      .get(`${Config.dataRoot}author.json`)
      .end(function(err, response){
        if(!err && response.ok){
          dispatch(updateAuthor(response.body));
        }
      });
  }
}