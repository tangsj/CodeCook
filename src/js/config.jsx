/**
 * 站点通用配置
 * @type {Object}
 */
let __debug__ = !(/tangsj.com/gi.test(location.hostname));

export default {
  staticRoot: ( __debug__ ? 'http://localhost:8080/' : 'http://www.tangsj.com/' ),
  postRoot: ( __debug__ ? 'http://localhost:8008/posts/' : 'http://upload.tangsj.com/posts/'),
  dataRoot: ( __debug__ ? 'http://localhost:8008/datas/' : 'http://upload.tangsj.com/datas/'),
  imgRoot: ( __debug__ ? 'http://localhost:8008/uploads/' : 'http://upload.tangsj.com/uploads/')
}