/**
 * Nav comp
 * @return {[type]}     [description]
 */
var Nav = React.createClass({
  getDefaultProps(){
    return {
      nav: Config.nav
    }
  },
  itemHandler(e){
    alert($(e.target).text());
  },
  render(){
    return (
      <nav>
        {
          this.props.nav.map((target, index) => {
            return (
              <a key={index} onClick={this.itemHandler} href={ target.url || "javascript:;" }>{target.name}</a>
            )
          })
        }
      </nav>
    );
  }
});

module.exports = Nav;