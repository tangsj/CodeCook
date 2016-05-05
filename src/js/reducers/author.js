import assign from 'object-assign';
import * as types from 'actions/author';

const initialState = {
  name: '', // 花名
  fullName: '', // 全名
  mail: '', // 邮箱
  job: '', // 职位
  address: '', // 地址
  github: '', // github URL
  weibo: '', // weibo URL
  google: '', // google URL
  avatar: '' // 头像
}

export default function Author(state = initialState, action){
  switch(action.type){
    case types.UPDATE_AUTHOR_INFO:
      return assign({}, state, action.author)
    default:
      return state;
  }
}