/**
 * loading comp
 */
var Loading = React.createClass({
  render(){
    return (
      <div className="loading" style={ this.props.style }>
        <i></i><i></i><i></i><i></i><i></i>
      </div>
    )
  }
});

module.exports = Loading;