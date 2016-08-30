/**
 * Article
 * @author tangsj
 */
import request from 'superagent';
import jsonp from 'superagent-jsonp';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import ReactMarkdown from 'react-markdown';
import Config from 'config';
import hljs from 'highlight.js';

const ds_host = 'http://api.duoshuo.com';
const ds_short_name = 'codecook';
const ds_secret = '6669f13d8d37a62e51bac1e5294b452b';

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
        commentShow: false,
        content: '',
        post: ''
      }
    }
    loadPostContent(post){
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
      this.props.posts.map((post, index)=>{
        if(id == post.id){
          this.setState(Object.assign(this.state, {
            post: post
          }));
        }
      });
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    componentDidUpdate(prevProps, prevState) {
      let dom = ReactDOM.findDOMNode(this);
      if(dom){
        // 语法高亮
        Array.prototype.slice.call(dom.querySelectorAll('pre code')).forEach( (block, index) => {
          hljs.highlightBlock(block);
        });
      }
    }
    componentDidMount() {
      this.getPostById(this.props.id);
    }
    showComment(){
      this.setState({
        commentShow: !this.state.commentShow
      });
    }
    submitComment(){
      let text = this.refs.ctxt.value.trim();

      if(text.length == 0){
        this.refs.ctxt.focus();
        return false;
      }

      request
        .get(`${ds_host}/posts/create.jsonp`)
        .use(jsonp)
        .query({
          message: text,
          thread_key: this.state.post.id
        })
        .set('Accept', 'application/json')
        .end((err, response) => {
          if(!err && response.ok){
            console.log(response);
          }
        });
    }
    render() {
      let post = this.state.post;

      if(!this.state.content){
        post && this.loadPostContent(post);
        return false;
      }


      let comStyle = {
        display: 'none'
      }
      this.state.commentShow && (comStyle.display = 'block');

      return (
        <article className="posts">
          {
            post.figure ? <img src={`${Config.imgRoot}${post.figure}`} alt={ post.title } /> : ''
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

          <div className="footer clearfix hide">
            <a href="javascript:;" className="share-link hide"><i className="icon-share-alt"></i>分享</a>
            <a href="javascript:;" onClick={ this.showComment.bind(this) } className="comments"><i className="icon-comment"></i>评论</a>
          </div>

          <div className="comment-box" style={ comStyle }>
            <textarea ref="ctxt" name="ctxt" id="" cols="30" rows="5"></textarea>
            <p className="btn-warp">
              <a className="submit" onClick={ this.submitComment.bind(this) } href="javascript:;">说一句</a>
            </p>
            <div className="comment-list"></div>
          </div>
        </article>
      );
    }
}

export default Article;
