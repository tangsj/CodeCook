/**
 * Nav comp
 * @return {[type]}     [description]
 */
import { Link, IndexLink } from 'react-router';

var Nav = React.createClass({
  getDefaultProps(){
    return {
      nav: Config.nav
    }
  },
  render(){
    return (
      <nav>
        {
          this.props.nav.map((target, index) => {
            var linkProps = {}
            if( target.url == '/'){
              linkProps.onlyActiveOnIndex = true;
            }
            return <Link {...linkProps} activeClassName="active" key={ `nav-${index}` } to={ { pathname: target.url } }>{ target.name }</Link>
          })
        }
      </nav>
    );
  }
});

module.exports = Nav;