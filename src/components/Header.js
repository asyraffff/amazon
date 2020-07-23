import React from 'react'
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
    //const [state, dispatch] = useStateValue();
    const [{ basket, user }] = useStateValue();
    // state = { basket: [] }
    // like append and removing the item from the basket

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    // console.log(basket);

    return (
        <nav className="header">
            {/* amazon logo -> left */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo">

                </img>
            </Link>

            {/* search bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                {/* Basket with a number */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number of checkout */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header
