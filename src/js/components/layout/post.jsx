/**
 * 文章详细
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from 'components/widget/profile';
import Article from 'components/widget/article';
import Tag from 'components/widget/tag';
import * as postsActions from 'actions/posts';

@connect(
  state => ({ posts: state.get('posts') }),
  dispatch => bindActionCreators(postsActions, dispatch)
)
class Post extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Post';
    }
    componentWillMount() {
      this.props.fetchPostList();
    }
    render() {
      return (
        <div className="wrapper page-article">
          <Profile />
          <Article id={ this.props.params.id } />
          <Tag />
        </div>
      );
    }
}

export default Post;



