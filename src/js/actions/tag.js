import request from 'superagent';
import Config from 'config';

/**
 * 重置Tag 信息
 */
export const RESET_TAG_INFO = 'reset-tag-info';
export function resetTag(tag){
  return {
    type: RESET_TAG_INFO,
    tag
  }
}

/**
 * 清空Tag
 */
export const CLEAR_TAG_INFO = 'clear-tag-info';
export function cleanTagInfo(){
  return {
    type: CLEAR_TAG_INFO
  }
}