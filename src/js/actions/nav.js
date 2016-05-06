import request from 'superagent';
import Config from 'config';

/**
 * 更新Nav 信息
 */
export const UPDATE_NAV_INFO = 'update-nav-info';
export function updateNav(nav){
  return {
    type: UPDATE_NAV_INFO,
    nav
  }
}

/**
 * 拉取Nav info
 */
export function fetchNav(){
  return dispatch => {
    request
      .get(`${Config.dataRoot}nav.json`)
      .end(function(err, response){
        if(!err && response.ok){
          dispatch(updateNav(response.body));
        }
      });
  }
}