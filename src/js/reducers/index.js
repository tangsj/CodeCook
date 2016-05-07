import { combineReducers } from 'redux';
import author from './author';
import nav from './nav';
import tag from './tag';

const rootReducer = combineReducers({
  // 创建者信息
  author,
  // 导航信息
  nav,
  // 标签信息
  tag
});

export default rootReducer;