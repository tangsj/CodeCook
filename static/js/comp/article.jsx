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
          <h1><a href="javascript:;">jQuery load() 方法加载图片在IE中不工作</a></h1>
          <div className="meta">
            <span className="date"><i className="icon-calendar"></i>2016-02-04</span>
            <span className="category"><i className="icon-folder-close"></i><a href="javascript:;" className="category-link">Tag</a></span>
          </div>
        </div>

        <div className="article-entry">
          <p>当你的javascript动作需要在一张图片加载完成后才能进行时，你就需要用到.load()方法</p>

          <p>
          ```javascript
          $('img').load(function(){
            // do something
          });
          ```
          </p>

          <p>
          但是你会发现，这样在IE中是不起作用的，这是因为IE缓存引起的，解决办法：
          </p>

          <p>
          ```javascript
          var $img = $('img');
          $img.attr("src", $img.attr('src') + "?" + new Date().getTime());
          ```
          </p>
        </div>

        <div className="footer clearfix">
          <a href="javascript:;" className="share-link"><i className="icon-share-alt"></i>分享</a>
          <a href="javascript:;" className="comments"><i className="icon-comment"></i>评论</a>
        </div>
      </article>
    );
  }
});

module.exports = Article;