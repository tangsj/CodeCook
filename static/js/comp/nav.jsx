/**
 * Nav comp
 * @return {[type]}     [description]
 */
module.exports = React.createClass({
  getDefaultProps(){
    var siteConfig = require('../site.json');
    return {
      nav: siteConfig.nav
    }
  },
  itemHandler(e){
    alert($(e.target).text());
  },
  render(){
    return (
      <nav>
        { this.props.nav.map((target, index) => {
          return (
            <a key={index} onClick={this.itemHandler} href={ target.url || "javascript:;" }>{target.name}</a>
          )
        }) }
      </nav>
    );
  }
});