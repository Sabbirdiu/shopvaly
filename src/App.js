import React,{Component} from 'react';
import Homepage from './pages/homepage/Homepage';
import { Route,Switch,Redirect } from 'react-router-dom';
import {GlobalStyle} from './globalstyle'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import {auth,createUserProfileDocument} from './firebase/firebase-utils'
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutPage from './pages/checkout/CheckoutPage'
import HeaderRoute from './components/Newsfeed/HeaderRoute';


 
class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
       if(userAuth){
         const userRef = await createUserProfileDocument(userAuth)

         userRef.onSnapshot(snapShot =>{
           setCurrentUser({
             currentUser:{
               id: snapShot.id,
               ...snapShot.data()
             }
           })
           
         })
       }
       setCurrentUser(userAuth);
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){

  return (
    <div className="App">
       <GlobalStyle/>
     <Header/>
     <Switch>

     <Route exact path = "/" component={Homepage} />
     <Route path = "/shop" component={ShopPage} />
     <Route path = "/newsfeed" component={HeaderRoute} />
     <Route exact path = "/checkout" component={CheckoutPage} />
     <Route exact path="/signin" render = {() => 
      this.props.currentUser ? (<Redirect to='/'/>
      ) : (
      <SignInAndSignUpPage/>)}/>

     </Switch>
     
    
    </div>
  );
  }
}
const mapStatToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStatToProps,mapDispatchToProps)(App);
