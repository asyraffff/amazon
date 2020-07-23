import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect
  // Piece of code which runs based on a given conditon

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in...

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the  user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      // Any cleanup operations go in here..
      unsubscribe();
    }
  }, []);

  // console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


{/* localhost.com */ }
{/* localhost.com/checkout */ }
{/* localhost.com/login */ }