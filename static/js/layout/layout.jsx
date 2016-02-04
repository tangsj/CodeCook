/**
 * 页面Layout
 * @return {[type]}     [description]
 */
var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');
var PageLoading = require('./loading.jsx');

var PageLayout = React.createClass({
  getDefaultProps(){
    return {}
  },
  getInitialState(){
    return {
      pageLoaded: false
    }
  },
  componentDidMount(){
    console.log('Layout Component Mount');
  },
  pageLoaded(loaded){
    this.setState({ pageLoaded: loaded });
  },
  render(){
    var l = this.state.pageLoaded ? '  loaded' : '';
    return (
      <div className={'layout-wrap' + l}>
        <Header />

        <Main />

        <Footer />

        <PageLoading loadedFun={this.pageLoaded}/>
      </div>
    )
  }
});

module.exports = PageLayout;