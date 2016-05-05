/**
 * App Root
 * @author tangsj
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from 'actions/author';

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
        return <div>App Author. { JSON.stringify( this.props.author) }</div>;
    }
}

export default App;
