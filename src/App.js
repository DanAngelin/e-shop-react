import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';



export class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className='App'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='*' component={Page404} />
          </Switch>
      </div>
    );
  }
}

export default App;
