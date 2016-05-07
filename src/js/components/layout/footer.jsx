/**
 * Footer
 * @author tangsj
 */
import { connect } from 'react-redux';

@connect(
  state => ({ author: state.author })
)
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
    }
    render() {
        return (
          <footer>
            <div className="wrapper">
              <p>© 2015 { this.props.author.name }</p>
              <p>Chrome</p>
            </div>
          </footer>
        );
    }
}

export default Footer;
