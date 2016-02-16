/**
 * PageLoading layout
 * 为了增强化验，逻辑已移入了  layout.jsx
 */
var Loading = require('../comp/loading.jsx');

var PageLoading = React.createClass({
  getInitialState(){
    return {
      loaded: false
    }
  },
  componentDidMount(){
    window.onload = () => {
      this.setState({ loaded: true });
      $body.removeClass('oh');
      this.props.loadedFun(this.state.loaded);
    }
  },
  render(){
    var style = this.state.loaded ? { display: 'none' } : { display: 'block' }
    return (
      <div className="page-loading" style={ style }>
        <Loading />
      </div>
    );
  }
});

module.exports = PageLoading;