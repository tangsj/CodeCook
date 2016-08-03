import Immutable from 'immutable';
import _ from 'lodash';
import * as types from 'actions/tag';


const initialState = Immutable.List();

export default function nav(state = initialState, action){
  switch(action.type){
    case types.RESET_TAG_INFO:
      let newTags = [];
      _.each(action.tag, (tag, i) => {
        tag.split(',').map( (t, k) => {
          let _in = false;
          let temp = {
            name: t,
            num: 1
          }
          newTags.map((item, j) => {
            if(item.name == t){
              item.num++;
              _in = true
            }
          });
          !_in && newTags.push(temp);
        } );
      });

      return Immutable.List(newTags);
    case types.CLEAR_TAG_INFO:
      return state.clear();
    default:
      return state;
  }
}
