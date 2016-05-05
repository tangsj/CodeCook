const UPDATE_AUTHOR_INFO = 'update-author-info';

/**
 * 更新Author 信息
 */
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
  return dispatch => {
    console.log('fetch author info');
  }
}