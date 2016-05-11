/**
 * 站点入口
 * @author tangsj
 */

//样式引入
import '../css/main.min.css';

import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Immutable from 'immutable';

/**
 * configureStore and buildStore
 */
const buildStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f // Chrome Redux工具
)(createStore);

const store = buildStore(rootReducer, Immutable.Map());

// 引入布局类型components
import App from 'components/index';
import Index from 'components/layout/index';
import About from 'components/layout/about';
import NoMatch from 'components/layout/nomatch';

const env = process.env.NODE_ENV || 'development';
// 开发环境下使用hashHistory
const history = (env == 'production' ? browserHistory : hashHistory);

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="about" component={ About }/>
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-entry'));