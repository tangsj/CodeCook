/**
 * Loading layout
 */
var Loading = React.createClass({
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
        <div className="loading"></div>
      </div>
    );
  }
});

module.exports = Loading;