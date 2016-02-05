/**
 * 页面Layout
 * @return {[type]}     [description]
 */
var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');

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
    window.onload = () => {
      this.setState({ pageLoaded: true });
      $body.removeClass('oh');
      $('.page-loading').fadeOut();
    }
  },
  render(){
    var cname = this.state.pageLoaded ? ' loaded' : '';
    return (
      <div className={'layout-wrap' + cname}>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
});

module.exports = PageLayout;