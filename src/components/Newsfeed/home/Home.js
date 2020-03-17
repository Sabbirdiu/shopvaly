import React, {
    Component
} from 'react'
import Like from '../like/like'
import './home.scss'

class Home extends Component {
    render() {
        return (
             <div style={{maxWidth:'68%',textAlign:'justify',fontSize:'30px',marginRight:'0px' }} >
                <div className='body'>
            <div className="f-card">
            <div className="header">
              <div className="options"><i className="fa fa-chevron-down"></i></div>
              <img className="co-logo" alt=""  src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/Sabbirdiu/profile_327183545.jpg" />
             
              <div className="time">2hrs· <i className="fa fa-globe"></i></div>
            </div>
            <div className="content">
              <p>অনেক দেরি করে হলেও মূল অর্ডার ফ্রীজ এখনো না পেলেও ক্যাশব্যাক এর টাকায় অর্ডার করা ওভেন আজ বুঝে পেলাম, অনেক অনেক ধন্যবাদ Easy Shop এবং M K Electronics.
            আশা করি মূল অর্ডারের ফ্রীজটাও খুব তাড়াতাড়ি পেয়ে যাবো।<span style={{color:'red'}} >See More</span> </p>
            </div>
          
            <div className="reference">
              <img className="reference-thumb" alt="" src="https://johnlewis.scene7.com/is/image/JohnLewis/237030601?$rsp-pdp-port-1440$" />
             
            </div>
            <div className="social">
              <div className="social-content"></div>
              <div className="social-buttons">
                <span><i className="fa fa-thumbs-up"></i><Like/></span>
             </div>
            </div>
          </div>
          
          <div className="f-card">
            <div className="header">
              <div className="options"><i className="fa fa-chevron-down"></i></div>
              <img className="co-logo" alt=""  src="https://instructory-aws-storage.s3.us-west-1.amazonaws.com/users/Sabbirdiu/profile_327183545.jpg" />
             
              <div className="time">2hrs · <i class="fa fa-globe"></i></div>
            </div>
            <div className="content">
              <p>অনেক দেরি করে হলেও মূল অর্ডার ফ্রীজ এখনো না পেলেও ক্যাশব্যাক এর টাকায় অর্ডার করা ওভেন আজ বুঝে পেলাম, অনেক অনেক ধন্যবাদ Easy Shop এবং M K Electronics.
            আশা করি মূল অর্ডারের ফ্রীজটাও খুব তাড়াতাড়ি পেয়ে যাবো।<span style={{color:'red'}} >See More</span> </p>
            </div>
          
            <div className="reference">
              <img className="reference-thumb" alt="" src="https://johnlewis.scene7.com/is/image/JohnLewis/237030601?$rsp-pdp-port-1440$" />
             
            </div>
            <div className="social">
              <div className="social-content"></div>
              <div className="social-buttons">
                <span><i className="fa fa-thumbs-up"></i><Like/></span>
                </div>
            </div>
          </div>
          
          </div>
        
          
            </div>
        )
    }
}

export default Home