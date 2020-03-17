import React from 'react'
import './newsheader.scss'
import {Link} from 'react-router-dom'
// import HeaderRoute from './HeaderRoute'




const NewsHeader = () => {
    

    return (
        <div  className="body" >
           <ul>
                <li><Link to="/newsfeed">All</Link></li>
                <li><Link to="/newsfeed/customer">Customer</Link></li>
                <li><Link to="/newsfeed/seller">Seller</Link></li>
                <li><Link to="/newsfeed/ceo">Ceo</Link></li>
            </ul>
            
        </div>
    )
}

export default NewsHeader