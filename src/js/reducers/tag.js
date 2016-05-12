import Immutable from 'immutable';
import _ from 'lodash';
import * as types from 'actions/tag';


const initialState = Immutable.List();

export default function nav(state = initialState, action){
  switch(action.type){
    case types.RESET_TAG_INFO:
      let newTags = [];
      _.each(action.tag, (tag, i) => {
        var _in = false;
        _.each(newTags, (item, j) => {
          if(item.name == tag.name){
            item.num++;
            _in = true
          }
        });
        !_in && newTags.push(_.extend({},tag));
      });

      return Immutable.List(newTags);
    case types.CLEAR_TAG_INFO:
      return state.clear();
    default:
      return state;
  }
}