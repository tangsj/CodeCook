/**
 * Posts
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import ReactMarkdown from 'react-markdown';
import * as postsActions from 'actions/posts';
import * as postinfoActions from 'actions/postinfo';
import Config from 'config';

/**
 * 单个文章
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  state => ( { postinfo: state.get('postinfo') } ),
  dispatch => bindActionCreators(postinfoActions, dispatch)
)
class Article extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Article';
      this.state = {
        imgloading: false
      }
    }
    _loadPostFigure(figurename){
      let figure = new Image();
      figure.onload = () => {
        this.setState({
          imgloading: true
        });
      }
      figure.src = Config.imgRoot + figurename;
    }
    shouldComponentUpdate(nextProps, nextState) {
      if(Immutable.is(this.props.postinfo, nextProps.postinfo) && Immutable.is(this.state, nextState)){
        return false;
      }
      return true;
    }
    componentDidMount() {
      this.props.fetchPostInfo(this.props.post);
    }
    componentWillUnmount() {
      this.props.cleanPostInfo();
    }
    render() {
      const post = this.props.post;
      const postinfo = this.props.postinfo;

      if(!!post.figure && !this.state.imgloading){
        this._loadPostFigure(post.figure);
      }

      return (
        <article className="posts">
          {
            this.state.imgloading ? <img src={`${Config.imgRoot}${post.figure}`} alt={ post.title } /> : ''
          }
          <div className="header">
            <h1><a href="javascript:;">{ post.title }</a></h1>
            <div className="meta">
              <span className="date">
                <i className="icon-calendar"></i>{ post.date }
              </span>
              <span className="category">
                <i className="icon-folder-close"></i>
                <a href="javascript:;" className="category-link">Tag</a>
              </span>
            </div>
          </div>

          <div className="article-entry">
            {
              postinfo.has(post.id) ?
                <ReactMarkdown source={ postinfo.get(post.id) }/>
              :
                <p className="tc">加载中...</p>
            }
          </div>

          <div className="footer clearfix">
            <a href="javascript:;" className="share-link"><i className="icon-share-alt"></i>分享</a>
            <a href="javascript:;" className="comments"><i className="icon-comment"></i>评论</a>
          </div>
        </article>
      );
    }
}

/**
 * 文章列表
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  state => ({ posts: state.get('posts') }),
  dispatch => bindActionCreators(postsActions, dispatch)
)
class Posts extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Posts';
    }
    componentDidMount() {
      this.props.fetchPostList();
    }
    componentWillUnmount() {
      console.log('posts unmount');
      this.props.cleanPostList();
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    render() {
      const postlist = this.props.posts.toJS();
      return (
        <section className="post-list ">
          <div className="inner">
            {
              postlist.map((post, index) => {
                return (
                  <Article post={ post } key={ `post_${index}` }/>
                )
              })
            }
          </div>
        </section>
      );
    }
}

export default Posts;
