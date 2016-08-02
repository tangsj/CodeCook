/**
 * about
 * @author tangsj
 */
import Config from 'config';
import { connect } from 'react-redux';

@connect(
  state => ({
    author: state.get('author')
  })
)
class About extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'About';
    }
    render() {
      const author = this.props.author.toObject();

      return (
        <div className="wrapper page-about">
          <div className="info">
            <div className="left">
              <div className="w100">
                <h2 className="name">{ author.fullName }</h2>
                <h3 className="title">{ author.job }</h3>
              </div>
            </div>
            <div className="center">
            {
              author.photo ? <img src={`${Config.imgRoot}${author.photo}`} className="photo" alt="" /> : ''
            }
            </div>
            <div className="right">
              <div className="w100">
                <p>{ author.birthday } <i className="icon-user"></i></p>
                <p>{ author.mobile } <i className="icon-phone"></i></p>
                <p>{ author.mail } <i className="icon-envelope"></i></p>
                <p>{ author.address } <i className="icon-home"></i></p>
              </div>
            </div>
          </div>
          <div className="work">
            <h2><i className="icon-link"></i>待过的地方</h2>
            <div className="items">
              <div className="item">
                <div className="time">2011/2 - 2013/2</div>
                <div className="company">重庆中天国际信息技术有限公司</div>
              </div>
              <div className="item">
                <div className="time">2013/3 - 2014/5</div>
                <div className="company">重庆昇通科技有限公司</div>
              </div>
              <div className="item">
                <div className="time">2014/5 - 2015/2</div>
                <div className="company">重庆海外旅业（旅行社）集团有限公司</div>
              </div>
              <div className="item">
                <div className="time">2015/2 - 至今</div>
                <div className="company">重庆火码互动科技有限公司</div>
              </div>
            </div>
          </div>
          <div className="project">
            <h2><i className="icon-bookmark"></i>干过的事儿</h2>
            <div className="items">
              <div className="item">
                <div className="container">
                  <div className="time">
                    <p>16/05</p>
                    <p className="year">2016</p>
                  </div>
                  <div className="content">
                    <div className="title">个人博客</div>
                    <div className="link"><a target="_blank" href="http://www.tangsj.com">http://www.tangsj.com</a></div>
                    <div className="points"><span>react</span><span>redux</span><span>webpack</span><span>gulp</span></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="time">
                    <p>03/04</p>
                    <p className="year">2015</p>
                  </div>
                  <div className="content">
                    <div className="title">东风日产官网[PC/Mobile]</div>
                    <div className="link"><a target="_blank" href="http://www.dongfeng-nissan.com.cn">http://www.dongfeng-nissan.com.cn</a></div>
                    <div className="desc">负责官网、各车型页静态页面及特效制作</div>
                    <div className="points"><span>css3</span><span>html5</span><span>postcss</span><span>gulp</span></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="time">
                    <p>01/07</p>
                    <p className="year">2014</p>
                  </div>
                  <div className="content">
                    <div className="title">旅景B2B平台</div>
                    <div className="link"><a target="_blank" href="http://www.trvl.cn">http://www.trvl.cn</a></div>
                    <div className="desc">前端负责人，完成前端框架搭建，公用模块实现，前端自动化构建</div>
                    <div className="points"><span>requirejs</span><span>grunt</span></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="time">
                    <p>GG</p>
                    <p className="year">2013</p>
                  </div>
                  <div className="content">
                    <div className="title">灵客</div>
                    <div className="link"><a target="_blank" href="http://www.linkup365.com">http://www.linkup365.com</a></div>
                    <div className="desc">完成业务支撑系统，boss系统功能及交互开发</div>
                    <div className="points"><span>seajs</span><span>jquery</span></div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="container">
                  <div className="time">
                    <p>21/11</p>
                    <p className="year">2012</p>
                  </div>
                  <div className="content">
                    <div className="title">香满园</div>
                    <div className="link"><a target="_blank" href="http://www.xmy365.com">http://www.xmy365.com</a></div>
                    <div className="desc">先后负责1期页面及交互开发、2期技术指导、3期前端框架搭建，公用模块实现，前端自动化构建</div>
                    <div className="points"><span>drupal</span><span>jquery</span><span>requirejs</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default About;
