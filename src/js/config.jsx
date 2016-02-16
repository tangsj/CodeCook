/**
 * 站点通用配置
 * @type {Object}
 */

var _debug = true;

if(location.host == 'www.tangsj.com'){
  _debug = false;
}

var Config = {
  staticRoot: (!_debug ? 'http://www.tangsj.com/' : `${location.protocol}//${location.hostname}/` ),
  apiRoot: (!_debug ? 'http://www.tangsj.com/services/' : `${location.protocol}//${location.hostname}/services/`),
  nav: [
    {
      name: "首页",
      url: "/"
    },
    {
      name: "好玩的",
      url: "funny"
    },
    {
      name: "标签",
      url: "tags"
    },
    {
      name: "关于我",
      url: "about"
    }
  ],
  profile: {
    name: 'CodeCook',
    fullName: '汤世俊',
    mail: 't_fate@163.com',
    job: 'Web Developer',
    address: 'Chongqing, China',
    github: 'http://github.com/tangsj',
    weibo: 'http://weibo.com/u/2337863121',
    google: 'https://plus.google.com/103636345185627159316',
    avatar: 'dest/images/avatar.jpg'
  },
  tags: [
    { name: "Javascript", number: 0 },
    { name: "Css", number: 0 },
    { name: "Html", number: 0 },
    { name: "Linux", number: 0 },
    { name: "Life", number: 1 },
  ]
}


module.exports = Config;