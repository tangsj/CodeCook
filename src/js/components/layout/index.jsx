/**
 * 首页内容
 * @author tangsj
 */
import Profile from 'components/layout/profile';
import Posts from 'components/layout/posts';
import Tag from 'components/layout/tag';

class Index extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'Index';
    }
    render() {
      return (
        <div className="wrapper page-index">
          <Profile />
          <Posts />
          <Tag />
        </div>
      );
    }
}

export default Index;



