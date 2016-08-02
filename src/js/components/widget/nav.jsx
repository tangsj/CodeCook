/**
 * Nav
 * @author tangsj
 */
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActions from 'actions/nav';

@connect(
  state => ({ nav: state.get('nav') }),
  dispatch => bindActionCreators(navActions, dispatch)
)
class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Nav';
    }
    componentWillMount() {
      this.props.fetchNav();
    }
    render() {
      const nav = this.props.nav.toArray();
      return (
        <nav>
          {
            nav.map(function(item, index){
              return <Link to={ item.link } key={ `nav_${index}` }>{ item.text }</Link>
            })
          }
        </nav>
      );
    }
}

export default Nav;
