/**
 * Profile
 * @author tangsj
 */
import Config from 'config';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';

@connect(
  state => ({
    author: state.get('author'),
    posts: state.get('posts'),
    tags: state.get('tag')
  })
)
class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Profile';
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    render() {
      const author = this.props.author.toObject();
      return (
        <aside className="profile">
          <div className="inner">
            <div className="base-info">
              {
                !!author.avatar ? <img src={ `${Config.imgRoot}${author.avatar}` } className="avatar" /> : ''
              }
              <h2 className="name">{ author.name }</h2>
              <h3 className="title">{ author.job }</h3>
              <div className="location">
                <i className="icon-map-marker"></i>{ author.address }
              </div>
              <a href={ author.github } target="_blank" className="follow">FOLLOW</a>
            </div>

            <div className="article-info">
              <div className="col">
                { this.props.posts.size }
                <p>POSTS</p>
              </div>
              <div className="col">
                { this.props.tags.size }
                <p>TAGS</p>
              </div>
            </div>

            <div className="contact-info">
              <a href={ author.github } target="_blank" className="github" title="github"><i className="icon-github"></i></a>
              <a href={ author.weibo } target="_blank" className="weibo" title="weibo"><i className="icon-weibo"></i></a>
              <a href={ author.google } target="_blank" className="google" title="google+"><i className="icon-google-plus"></i></a>
            </div>
          </div>
        </aside>
      );
    }
}

export default Profile;
