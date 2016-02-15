/**
 * home layout
 * @return {[type]}     [description]
 */
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Home = React.createClass({
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

        <section id="main">
          {this.props.children}
        </section>

        <Footer />
      </div>
    )
  }
});

module.exports = Home;