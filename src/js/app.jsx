/**
 * 站点入口
 * @author tangsj
 */

//样式引入
import '../css/main.css';

import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Immutable from 'immutable';

const env = process.env.NODE_ENV || 'development';

/**
 * configureStore and buildStore
 */
const buildStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f // Chrome Redux工具
)(createStore);

const store = buildStore(rootReducer, Immutable.Map());

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

// 引入布局类型components
import App from 'components/index';
import Index from 'components/layout/index';
import About from 'components/layout/about';
import NoMatch from 'components/layout/nomatch';

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="about" component={ About }/>
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-entry'));
