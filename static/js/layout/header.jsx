/**
 * Header
 * @type {[type]}
 */
var Nav = require('../comp/nav.jsx');
var Search = require('../comp/search.jsx');

var Header = React.createClass({
  render(){
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

module.exports = Header;