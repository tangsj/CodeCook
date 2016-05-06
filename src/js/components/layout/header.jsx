/**
 * Header
 * @author tangsj
 */
import { connect } from 'react-redux';
import Nav from './nav';

@connect(
  state => ({author: state.author})
)
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Header';
  }
  render() {
    return (
      <header>
        <div className="wrapper">
          <a href="javascript:;" className="logo">{ this.props.author.name }</a>

          <Nav />

          <div className="search-form">
            <input type="text" name="keys" placeholder="Search" />
            <a href="javascript:;" className="icon-search"></a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
