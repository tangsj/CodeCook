/**
 * Profile
 * @author tangsj
 */
import Config from 'config';
import { connect } from 'react-redux';

@connect(
  state => ({ author: state.author })
)
class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Profile';
    }
    render() {
      const { author } = this.props;
      return (
        <aside className="profile">
          <div className="inner">
            <div className="base-info">
              <img src={ `${Config.imgRoot}${author.avatar}` } className="avatar" alt="" />
              <h2 className="name">{ author.name }</h2>
              <h3 className="title">{ author.job }</h3>
              <div className="location">
                <i className="icon-map-marker"></i>{ author.address }
              </div>
              <a href={ author.github } target="_blank" className="follow">FOLLOW</a>
            </div>

            <div className="article-info">
              <div className="col">
                0
                <p>POSTS</p>
              </div>
              <div className="col">
                0
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
