import { combineReducers } from 'redux-immutable';
import author from './author';
import nav from './nav';
import tag from './tag';
import posts from './posts';

const rootReducer = combineReducers({
  // 创建者信息
  author,
  // 导航信息
  nav,
  // 标签信息
  tag,
  // 文章列表信息
  posts
});

export default rootReducer;
