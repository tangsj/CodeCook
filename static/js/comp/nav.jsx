/**
 * Nav comp
 * @return {[type]}     [description]
 */
module.exports = React.createClass({
  getDefaultProps: function(){
    var siteConfig = require('../site.json');
    return {
      nav: siteConfig.nav
    }
  },
  render: function(){
    function getItem(target, index){
      return (
        <a key={index} href={ target.url || "javascript:;" }>{target.name}</a>
      )
    }
    return (
      <nav>
        { this.props.nav.map(getItem) }
      </nav>
    );
  }
});