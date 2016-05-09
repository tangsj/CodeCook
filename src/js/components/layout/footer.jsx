/**
 * Footer
 * @author tangsj
 */
import { connect } from 'react-redux';

@connect(
  state => ({ author: state.get('author') })
)
class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Footer';
    }
    render() {
      const author = this.props.author.toObject();
      return (
        <footer>
          <div className="wrapper">
            <p>© 2015 { author.name }</p>
            <p>Chrome</p>
          </div>
        </footer>
      );
    }
}

export default Footer;
