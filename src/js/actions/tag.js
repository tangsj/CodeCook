import request from 'superagent';
import Config from 'config';

/**
 * 更新Tag 信息
 */
export const UPDATE_TAG_INFO = 'update-tag-info';
export function updateTag(tag){
  return {
    type: UPDATE_TAG_INFO,
    tag
  }
}

/**
 * 拉取Tag info
 */
export function fetchTags(){
  return dispatch => {
    request
      .get(`${Config.dataRoot}tags.json`)
      .end(function(err, response){
        if(!err && response.ok){
          dispatch(updateTag(response.body));
        }
      });
  }
}