/**
 * 页面Layout
 * @return {[type]}     [description]
 */
var Header = require('./header.jsx');
var Main = require('./main.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
  getDefaultProps: function(){
    return {}
  },
  getInitialState: function(){
    return {}
  },
  componentDidMount: function(){
    console.log('Layout Component Mount');
  },
  render: function(){
    return (
      <div className="layout-wrap">
        <Header />

        <Main />

        <Footer />
      </div>
    )
  }
});