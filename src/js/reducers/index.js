import { combineReducers } from 'redux';
import author from './author';
import nav from './nav';

const rootReducer = combineReducers({
  // 创建者信息
  author,
  // 导航信息
  nav
});

export default rootReducer;