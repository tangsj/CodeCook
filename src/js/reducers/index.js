import { combineReducers } from 'redux';
import author from './author.js';

const rootReducer = combineReducers({
  // 创建者信息
  author
});

export default rootReducer;