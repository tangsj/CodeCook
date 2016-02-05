/**
 * index article
 */
var Article = React.createClass({
  getDefaultProps(){
    return {}
  },
  render(){
    return (
      <article className="posts">
        <img src="uploads/shoes.jpg" alt="" />

        <div className="header">
          <h1><a href="javascript:;">Ubuntu 安装 Consolas 字体</a></h1>
          <div className="meta">
            <span className="date"><i className="icon-calendar"></i>2016-02-04</span>
            <span className="category"><i className="icon-folder-close"></i><a href="javascript:;" className="category-link">Linux</a></span>
          </div>
        </div>

        <div className="article-entry" dangerouslySetInnerHTML={{__html: this.props.post}}></div>

        <div className="footer clearfix">
          <a href="javascript:;" className="share-link"><i className="icon-share-alt"></i>分享</a>
          <a href="javascript:;" className="comments"><i className="icon-comment"></i>评论</a>
        </div>
      </article>
    );
  }
});

module.exports = Article;