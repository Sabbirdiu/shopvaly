import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase-utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

// import SearchIcon from '../SearchIcon/SearchIcon'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header '>
      <Link to='/'>
        <strong>
          <span style={{ color: 'orange', fontSize: '30px' }}>Shop</span> valy
        </strong>
      </Link>
      <div className='options'>
        <Link className='option nav-link' to='/shop'>
          SHOP
        </Link>
        <Link className='option nav-link' to='/newsfeed'>
          News Feed
        </Link>
        <Link className='option nav-link' to='/signup'>
          SIGN UP
        </Link>

        {currentUser ? (
          <div className='option nav-link' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option nav-link' to='/signin'>
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
