/**
 * Nav
 * @author tangsj
 */
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
    componentDidMount() {
      this.props.fetchNav();
    }
    render() {
      const nav = this.props.nav.toArray();
      return (
        <nav>
          {
            nav.map(function(item, index){
              return <a href="javascript:;" key={ `nav_${index}` }>{ item.text }</a>
            })
          }
        </nav>
      );
    }
}

export default Nav;
