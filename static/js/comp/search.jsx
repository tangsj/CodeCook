/**
 * Search comp
 * @return {[type]}     [description]
 */
module.exports = React.createClass({
  searchHandler: function(){
    var input = this.refs.keys;
    var key = input.value.trim();

    if(key.length == 0){
      input.focus();
      return false;
    }

    alert(key);
  },
  render: function(){
    return (
      <div className="search-form">
        <input ref="keys" type="text" name="keys" placeholder="Search" />
        <a href="javascript:;" onClick={ this.searchHandler } className="icon-search"></a>
      </div>
    );
  }
});