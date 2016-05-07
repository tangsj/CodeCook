/**
 * Tag
 * @author tangsj
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagActions from 'actions/tag';

@connect(
  state => ({ tag: state.tag }),
  dispatch => bindActionCreators(tagActions, dispatch)
)
class Tag extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Tag';
    }
    componentDidMount() {
      this.props.fetchTags();
    }
    render() {
      const { tag } = this.props;
      return (
        <aside className="slidebar">
          <div className="widget-wrap">
            <div className="widget-title">Tags</div>
            <div className="widget">
              <ul className="tag-list">
                {
                  tag.map(function(item, index){
                    return (
                      <li key={ `tag_${index}` }>
                        <a href="javascript:;">
                          <i className="icon-caret-right"></i>{ item.name } <span>({ item.num })</span>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </aside>
      );
    }
}

export default Tag;
