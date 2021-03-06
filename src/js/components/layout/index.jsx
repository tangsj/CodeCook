/**
 * 首页内容
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from 'components/widget/profile';
import Posts from 'components/widget/posts';
import Tag from 'components/widget/tag';
import * as postsActions from 'actions/posts';

@connect(
  state => ({}),
  dispatch => bindActionCreators(postsActions, dispatch)
)
class Index extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Index';
    }
    componentWillMount() {
      this.props.fetchPostList();
    }
    render() {
      return (
        <div className="wrapper page-index">
          <Profile />
          <Posts />
          <Tag />
        </div>
      );
    }
}

export default Index;



