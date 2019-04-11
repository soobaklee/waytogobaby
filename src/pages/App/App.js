import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import LoginPage from '../Login';
import SignupPage from '../Signup';
import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage';
import ProductsPage from '../ProductsPage';
import CommunityPage from '../CommunityPage';
import CommunityProducts from '../../components/CommunityProducts/CommunityProducts';
import Advice from '../../components/Advice/Advice';
import PlayDatesPage from '../PlayDatesPage';
import { getCurrentLatLng, getWeather } from '../../utils/geolocation';
import { getCurWeatherByLatLng } from '../../utils/tp-api';
import userService from '../../utils/userService';


class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      lat: null,
      lng: null
    }
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  // Lifecycle Methods
  async componentDidMount() {

    const user = userService.getUser();
    const { lat, lng } = await getCurrentLatLng();
    console.log(lat, lng);

    const weatherData = await(
    fetch('/api/weather', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ lat: lat, lng: lng })
    })
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('React LatLng Error');
    }));

      console.log(weatherData.name);
    this.setState({
      user,
      lat,
      lng,
      temp: Math.round(weatherData.main.temp),
      icon: weatherData.weather[0].icon,
      city: weatherData.name
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"><Link to='/'><h1>Way To Go Baby</h1></Link></header>
        <Nav
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={(props) => (
            <LandingPage
              {...props}
              lat={this.state.lat}
              lng={this.state.lng}
              temp={this.state.temp}
              icon={this.state.icon}
              city={this.state.city}
            />
          )} />
          <Route exact path='/products' render={(props) => (
            <ProductsPage
              {...props}
            />
          )} />
          <Route exact path='/community' render={(props) => (
            <CommunityPage
              {...props}
              lat={this.state.lat}
              lng={this.state.lng}
              temp={this.state.temp}
              icon={this.state.icon}
              city={this.state.city}
            />
          )} />
          <Route exact path='/community/share' render={(props) => (
            <CommunityProducts
              {...props}
            />
          )} />
          <Route exact path='/community/advice' render={(props) => (
            <Advice
              {...props}
            />
          )} />
          <Route exact path='/playdates' render={(props) => (
            <PlayDatesPage
              {...props}
              lat={this.state.lat}
              lng={this.state.lng}
              temp={this.state.temp}
              icon={this.state.icon}
            />
          )} />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div >
    );
  }
}

export default App;
