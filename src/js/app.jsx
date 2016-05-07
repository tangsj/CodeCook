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

/**
 * configureStore and buildStore
 */
const buildStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : undefined // Chrome Redux工具
)(createStore);
const store = buildStore(rootReducer, {});

// 引入布局类型components
import App from 'components/index';
import Index from 'components/layout/index';

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-entry'));