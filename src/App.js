import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import TermsAndConditions from './pages/TermsAndConditions';
import './utils/utility-classes.css';




function App() {

    return (
      <div className='App'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/terms-and-conditions' component={TermsAndConditions}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/category/:categoryName' component={Category}/>
            <Route path='*' component={Page404} />
          </Switch>
      </div>
    );
}

export default App;