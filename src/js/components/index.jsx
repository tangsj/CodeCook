/**
 * App Root
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/widget/header';
import Footer from 'components/widget/footer';
import * as authorActions from 'actions/author';

@connect(
  state => ({}),
  dispatch => bindActionCreators(authorActions, dispatch)
)
class App extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'App';
    }
    componentWillMount() {
      this.props.fetchAuthor();
    }
    componentDidMount() {
      console.log('App 挂载成功！');
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
