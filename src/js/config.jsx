/**
 * 站点通用配置
 * @type {Object}
 */
let __debug__ = !(location.hostname == 'tangsj.com');

export default {
  staticRoot: ( __debug__ ? 'http://localhost:8080' : 'http://www.tangsj.com/' ),
  postRoot: ( __debug__ ? 'http://localhost:8008/posts/' : 'http://api.tangsj.com/'),
  dataRoot: ( __debug__ ? 'http://localhost:8008/datas/' : 'http://api.tangsj.com/'),
  imgRoot: ( __debug__ ? 'http://localhost:8008/uploads/' : 'http://upload.tangsj.com/')
}