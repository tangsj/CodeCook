/**
 * Article
 * @author tangsj
 */
import request from 'superagent';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import Config from 'config';
import hljs from 'highlight.js';

/**
 * 文章详细
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
@connect(
  state => ({
    posts: state.get('posts')
  })
)
class Article extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Article';
      this.state = {
        imgloading: false,
        content: ''
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
    _loadPostContent(post){
      request
        .get(`${Config.postRoot}${post.source}`)
        .set({ Accept: 'text/plain' })
        .end((err, response) => {
          if(!err && response.ok){
            this.setState(Object.assign(this.state, {
              content: response.text
            }));
          }
        });
    }
    getPostById(id){
      let p;
      this.props.posts.map((post, index)=>{
        if(id == post.id){
          p = post;
        }
      });
      return p;
    }
    componentDidUpdate(prevProps, prevState) {
      Array.prototype.slice.call(ReactDOM.findDOMNode(this).querySelectorAll('pre code')).forEach( (block, index) => {
        hljs.highlightBlock(block);
      });
    }
    render() {
      if(this.props.posts.size == 0){
        return null;
      }

      let post = this.getPostById(this.props.id);

      if(!this.state.content){
        this._loadPostContent(post);
      }

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
                <a href="javascript:;" className="category-link">{ post.tag }</a>
              </span>
            </div>
          </div>

          <div className="article-entry">
            {
              this.state.content ?
                <ReactMarkdown source={ this.state.content }/>
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

export default Article;
