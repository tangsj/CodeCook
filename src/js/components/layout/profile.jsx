/**
 * Profile
 * @author tangsj
 */
import Config from 'config';
import { connect } from 'react-redux';
import Immutable from 'immutable';

@connect(
  state => ({ author: state.get('author') })
)
class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Profile';
      this.state = {
        a: 1
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if(Immutable.is(this.props.author, nextProps.author)){
        return false;
      }
      return true;
    }
    render() {
      // console.log('__Profile render');
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
