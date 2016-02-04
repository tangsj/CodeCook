/**
 * Site Right Widget
 */
var Widget = React.createClass({
  getDefaultProps(){
    return {
      name: 'Widget Name'
    }
  },
  render(){
    return (
      <div className="widget-wrap">
        <div className="widget-title">{ this.props.name }</div>
        <div className="widget">
          { this.props.children }
        </div>
      </div>
    );
  }
});

module.exports = Widget;