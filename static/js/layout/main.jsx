/**
 * Main
 * @type {[type]}
 */
var Profile = require('../comp/profile.jsx');
var Widget = require('../comp/widget.jsx');
var Article = require('../comp/article.jsx');
var Loading = require('../comp/loading.jsx');

var Main = React.createClass({
  getInitialState(){
    return {
      tags: Config.tags || [],
      articles: [],
      dataLoaded: false
    }
  },
  componentDidMount(){
    hljs.initHighlightingOnLoad();
    // 加载 文章列表
    $.ajax({
      url: Config.apiRoot + 'getArticleList.php',
      type: 'get',
      dataType: 'json'
    }).done((res) => {
      if(res.code == 1){
        //console.log( decodeURIComponent(res.data[0]) );
        this.setState(Object.assign(this.state, { dataLoaded: true, articles: res.data }));
      }
    });
  },
  componentDidUpdate(){
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  },
  render(){
    var loadingStyle = this.state.dataLoaded ? { display: 'none' } : { display: 'block' }
    var articleStyle = this.state.dataLoaded ? { display: 'block' } : { display: 'none' }
    return (
      <section id="main">
        <div className="wrapper clearfix">
          <Profile />

          <section className="post-list block-show">
            <Loading style={ loadingStyle }/>
            <div className="articles" style={ articleStyle }>
              {
                this.state.articles.map((post, index) => {
                  return (
                    <div className="inner" key={ 'post-' + index }>
                      <Article post={ post }/>
                    </div>
                  )
                })
              }
            </div>
          </section>

          <aside className="slidebar block-show">
            <Widget name="Tags">
              <ul className="tag-list">
                {
                  this.state.tags.map((item, index) => {
                    return (
                      <li key={'tag-' + index}>
                        <a href="javascript:;">
                          <i className="icon-caret-right"></i>{ item.name } <span>({ item.number || 0 })</span>
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </Widget>
          </aside>
        </div>
      </section>
    );
  }
});

module.exports = Main;