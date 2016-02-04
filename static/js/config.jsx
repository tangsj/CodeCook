/**
 * 站点通用配置
 * @type {Object}
 */
var Config = {
  staticRoot: location.origin,
  nav: [
    {
      name: "首页",
      url: "/"
    },
    {
      name: "好玩的",
      url: ""
    },
    {
      name: "标签",
      url: ""
    },
    {
      name: "关于我",
      url: ""
    }
  ],
  profile: {
    name: 'CodeCook',
    fullName: '汤世俊',
    mail: 't_fate@163.com',
    job: 'Web Developer',
    address: 'Choneqing, China',
    github: 'http://github.com/tangsj',
    weibo: 'http://weibo.com/u/2337863121',
    google: 'https://plus.google.com/103636345185627159316',
    avatar: '/dest/images/avatar.jpg'
  },
  tags: [
    { name: "Javascript", number: 0 },
    { name: "Css", number: 0 },
    { name: "Html", number: 0 },
    { name: "Linux", number: 0 }
  ]
}


module.exports = Config;