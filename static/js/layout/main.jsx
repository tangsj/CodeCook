/**
 * Main
 * @type {[type]}
 */
var Config = require('../config.jsx');
var Profile = require('../comp/profile.jsx');
var Widget = require('../comp/widget.jsx');
var Article = require('../comp/article.jsx');

var Main = React.createClass({
  getInitialState(){
    return {
      tags: Config.tags || []
    }
  },
  componentDidMount(){
    // 加载 文章列表
  },
  render(){
    return (
      <section id="main">
        <div className="wrapper clearfix">
          <Profile />

          <section className="post-list block-show">
            <div className="inner">
              <Article />
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