import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import TermsAndConditions from './pages/TermsAndConditions';
import './utils/utility-classes.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';



const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {
    return (
      <div className='App'>
          <Switch>
            <Route path='/login' render={(props) => 
                    <Login
                    {...props}
                    signInWithGoogle={this.props.signInWithGoogle}
                    />} 
            />
            <Route path='/register' component={Register} />
            <Route exact path='/'
                    render={(props) =>
                      <Home
                      {...props}
                      user={this.props.user}
                      signOut={this.props.signOut}
                    />}
            />
            <Route path='/about' component={About} />
            <Route path='/terms-and-conditions' component={TermsAndConditions}/>
            <Route path='/category/:categoryName' component={Category}/>
            <Route path='*' component={Page404} />
          </Switch>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
