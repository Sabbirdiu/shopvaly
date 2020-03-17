import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'

import NewsHeader from './NewsHeader'

import Home from './home/Home'
import Customer from './Customer'
import Seller from './Seller'
import Ceo from './ceo/Ceo'
import './Route.scss'


class HeaderRoute extends Component {
    
    render() {
        
        return (
            <div>
                <h1>NewsFeed</h1>
                <div  className="box-1" >
                <NewsHeader/>
                </div>
                
                    <Switch>
                        <Route exact path="/newsfeed" component ={Home} />
                        <Route  path="/newsfeed/customer" component ={Customer} />
                        <Route  path="/newsfeed/seller" component ={Seller} />
                        <Route  path="/newsfeed/ceo" component ={Ceo} />
                    </Switch>
                
            </div>
        )
    }
}




export default HeaderRoute
