/**
 * Profile Comp
 * @author tangsj
 */
var Profile = React.createClass({
  getInitialState(){
    var config = Object.create(Config.profile);

    return Object.assign(config, { staticRoot: Config.staticRoot })
  },
  render(){
    return (
      <aside className="profile">
        <div className="inner">
          <div className="base-info">
            <img src={ this.state.staticRoot + this.state.avatar } className="avatar" alt={ this.state.fullName } title={ this.state.fullName } />
            <h2 className="name">{ this.state.name }</h2>
            <h3 className="title">{ this.state.job }</h3>
            <div className="location"><i className="icon-map-marker"></i>{ this.state.address }</div>
            <a href={ this.state.github } target="_blank" className="follow">FOLLOW</a>
          </div>

          <div className="article-info">
            <div className="col">
              <span>0</span>
              <p>POSTS</p>
            </div>
            <div className="col">
              <span>0</span>
              <p>TAGS</p>
            </div>
          </div>

          <div className="contact-info">
            <a href={ this.state.github } target="_blank" className="github" title="github"><i className="icon-github"></i></a>
            <a href={ this.state.weibo } target="_blank" className="weibo" title="weibo"><i className="icon-weibo"></i></a>
            <a href={ this.state.google } target="_blank" className="google" title="google+"><i className="icon-google-plus"></i></a>
          </div>
        </div>
      </aside>
    );
  }
});

module.exports = Profile;