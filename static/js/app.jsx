// 支持情况判断
if(!Object.assign){
  alert('浏览器太老了，您该更换新的了！！！');
}
import Config from 'config';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// Home
import Home from 'layout.home';
import Main from 'layout.main';
import NoMatch from 'layout.nomatch';
import About from 'layout.about';

// 全局变量
window.$body = $('body');

function aboutLeave(){
  console.log('离开了About Page');
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Main} />
      <Route path="/about" component={About} onLeave={ aboutLeave } />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.querySelector('#app-entry'));