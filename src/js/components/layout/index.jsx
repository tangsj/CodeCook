/**
 * App Root
 * @author tangsj
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from 'actions/author';
import Header from 'components/layout/header.jsx';

@connect(
  state => ({ author: state.author}),
  dispatch => bindActionCreators(authorActions, dispatch)
)
class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    componentDidMount() {
      this.props.fetchAuthor();
    }
    render() {
        return (
          <div>
            <Header />
            {
              this.props.children
            }
            <div className="wrapper">App Author. { JSON.stringify( this.props.author) }</div>
          </div>
        )
    }
}

export default App;
