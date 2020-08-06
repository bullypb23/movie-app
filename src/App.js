import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './containers/HomePage/HomePage';
import MoviesList from './containers/MoviesList/MoviesList';
import MovieDetails from './containers/MovieDetails/MovieDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className='main'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={MoviesList} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);