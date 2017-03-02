/**
 * Posts
 * @author tangsj
 */
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import Immutable from 'immutable';
import Config from 'config';

/**
 * 文章列表
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  state => ({ posts: state.get('posts') })
)
class Posts extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Posts';
      this.state = {
      }
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    render() {
      var showList = this.props.posts.toJS();
      return (
        <section className="post-list ">
          <div className="inner">
            {
              showList.map((post, index) => {

                let dateSplit = post.date.split(' ');
                let dateArr = dateSplit[0].split('-');

                return (
                  <article className="posts" key={`plist_${index}`}>
                    {
                      post.figure ? <img src={`${Config.imgRoot}${post.figure}`} alt={ post.title } /> : ''
                    }

                    <div className="header">
                      <h1>
                        <Link to={ `post/${post.id}` }>{ post.title }</Link>
                      </h1>
                      <div className="date">
                        <i className="icon-calendar"></i>
                        <span>{ dateArr[1] }-{ dateArr[2] }</span>
                        <span className="year">{ dateArr[0] }</span>
                      </div>

                      <div className="meta">
                        <span className="category">
                          <i className="icon-folder-close"></i>
                          <a href="javascript:;" className="category-link">{ post.tag }</a>
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </section>
      );
    }
}

export default Posts;
