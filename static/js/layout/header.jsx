/**
 * Header
 * @type {[type]}
 */
var Nav = require('../comp/nav.jsx');
var Search = require('../comp/search.jsx');

module.exports = React.createClass({
  render: function(){
    return (
      <header>
        <div className="wrapper">
          <a href="javascript:;" className="logo">CodeCook</a>
          <Nav />
          <Search />
        </div>
      </header>
    );
  }
});