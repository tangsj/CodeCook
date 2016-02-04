// 支持情况判断
if(!Object.assign){
  alert('浏览器太老了，您该更换新的了！！！');
}

window.Config = require('./config.jsx');
window.$body = $('body');

// 页面布局
var Layout = require('./layout/layout.jsx');

ReactDOM.render(<Layout />, document.querySelector('#app-entry'));