// import  React from 'react';
// import './header.styles.scss';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/firebase.utils'
// import { connect } from 'react-redux';
// import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { createStructuredSelector } from 'reselect';
// import { selectCartHidden } from '../../redux/cart/cart.selector';
// import { selectCurrentUser } from '../../redux/user/user.selector';

// const Header = ({ currentUser , hidden }) => {

//     console.log(currentUser);

//     return (
//         <>
//             <div className="header">
//             <Link to="/" className="logo-container">
//                 <Logo className="logo" />
//             </Link>
//             <div className="options">
//             <Link className="option" to="/shop">
//                 SHOP
//             </Link>
//             <Link className="option" to="/shop">
//                 CONTACT
//             </Link>
//             {
//                 currentUser ? (
//                 <div className="option" onClick={()=> auth.signOut()} >SIGN OUT</div>
//                 ):(
//                 <Link to="/signin" className="option" >
//                     SIGN IN
//                 </Link>)
//             }
//             <CartIcon /> 
//             </div>
//             { hidden ? null : <CartDropdown /> } 
//         </div>
//         </>
//     )     
// }


// const mapStateToProps = createStructuredSelector({
//     currentUser : selectCurrentUser,
//     hidden : selectCartHidden
// });

// export default connect(mapStateToProps)(Header);


import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    
    return(
        <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
    )
  
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);