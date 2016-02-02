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
    return {}
  },
  componentDidMount(){
    console.log('Layout Component Mount');
  },
  render(){
    return (
      <div className="layout-wrap">
        <Header />

        <Main />

        <Footer />
      </div>
    )
  }
});

module.exports = PageLayout;