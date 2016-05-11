/**
 * App Root
 * @author tangsj
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from 'actions/author';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

@connect(
  state => ({ author: state.get('author')}),
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
          <div className="app-container">
            <Header />
            <section id="main">
              { this.props.children }
            </section>
            <Footer />
          </div>
        )
    }
}

export default App;
