import request from 'superagent';
import _ from 'lodash';
import Config from 'config';
import * as tagActions from './tag';

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
          // 取出标签信息
          let tags = [];
          _.each(response.body, (item, index) => {
            tags.push(item.tag || 'unknow');
          });
          dispatch(tagActions.resetTag(tags));

          // 更新文章列表
          dispatch(resetPostsList(response.body));
        }
      });
  }
}
