/**
 * index article
 */
var Article = React.createClass({
  getDefaultProps(){
    return {}
  },
  shareHandler(e){
    alert('分享');
  },
  commentHandler(e){
    alert('评论');
  },
  render(){

    var imgs = [];
    if(!!this.props.post.meta.figure){
      imgs.push(<img key="img" src={Config.staticRoot + this.props.post.meta.figure} alt={this.props.post.meta.title } />);
    }

    return (
      <article className="posts">
        { imgs }

        <div className="header">
          <h1><a href="javascript:;">{ this.props.post.meta.title }</a></h1>
          <div className="meta">
            <span className="date"><i className="icon-calendar"></i>{ this.props.post.meta.date }</span>
            <span className="category"><i className="icon-folder-close"></i><a href="javascript:;" className="category-link">{ this.props.post.meta.tag }</a></span>
          </div>
        </div>

        <div className="article-entry" dangerouslySetInnerHTML={{__html: this.props.post.main}}></div>

        <div className="footer clearfix">
          <a href="javascript:;" onClick={ this.shareHandler } className="share-link"><i className="icon-share-alt"></i>分享</a>
          <a href="javascript:;" onClick={ this.commentHandler } className="comments"><i className="icon-comment"></i>评论</a>
        </div>
      </article>
    );
  }
});

module.exports = Article;