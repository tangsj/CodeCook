/**
 * Posts
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from 'actions/posts';
import Config from 'config';

/**
 * 单个文章
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  dispatch => bindActionCreators(postsActions, dispatch)
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
        console.log('加载成功');
      }
      figure.src = Config.imgRoot + figurename;
    }
    render() {
      console.log('__Article render'); // 这里被执行了 3次 需要找到原因，猜测是全局的store更新影响
      const { post } = this.props;
      if(!!post.figure){
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
            <p className="tc">加载中...</p>
          </div>

          <div className="footer clearfix">
            <a href="javascript:;" className="share-link"><i className="icon-share-alt"></i>分享</a>
            <a href="javascript:;" className="comments"><i className="icon-comment"></i>评论</a>
          </div>
        </article>
      );
    }
}

export default Article;


/**
 * 文章列表
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  state => ({ posts: state.posts }),
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
    render() {
      const { postlist } = this.props.posts;
      return (
        <section className="post-list ">
          <div className="inner">
            {
              postlist.map(function(post, index){
                return <Article post={ post } key={ `post_${index}` }/>
              })
            }
          </div>
        </section>
      );
    }
}

export default Posts;
