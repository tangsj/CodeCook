/**
 * 页面Layout
 * @return {[type]}     [description]
 */
module.exports = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function(){
    console.log('Layout Component Mount');
  },
  render: function(){
    return (
      <div className="content">
        <strong>C</strong>ode<span>c</span>ook Static <strong>R</strong>oot
      </div>
    )
  }
});