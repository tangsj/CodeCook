/**
 * Nav
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navActions from 'actions/nav';

@connect(
  state => ({ nav: state.nav }),
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
        return (
          <nav>
            {
              this.props.nav.map(function(item, index){
                return <a href="javascript:;" key={ `nav_${index}` }>{ item.text }</a>
              })
            }
          </nav>
        );
    }
}

export default Nav;
