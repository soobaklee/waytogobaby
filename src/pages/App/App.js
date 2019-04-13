import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
// import { IntlProvider } from "react-intl"
import LoginPage from '../Login';
import SignupPage from '../Signup';
import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage';
import ProductsPage from '../ProductsPage';
import CommunityPage from '../CommunityPage';
import ShareItems from '../../components/ShareItems/ShareItems';
import Advice from '../../components/Advice/Advice';
import PlayDatesPage from '../PlayDatesPage';
import ProfilePage from '../ProfilePage';
import { getCurrentLatLng } from '../../utils/geolocation';
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
    const weatherData = await (
      fetch('/api/weather', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ lat: lat, lng: lng })
      })
        .then(res => {
          if (res.ok) return res.json();
          throw new Error('React LatLng Error');
        }));

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
              user={this.state.user}
            />
          )} />
          <Route exact path='/profile' render={(props) => (
              <ProfilePage
                {...props}
                user={this.state.user}
              />
          )} />
          <Route exact path='/products' render={(props) => (
            <ProductsPage
              {...props}
              user={this.state.user}
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
              user={this.state.user}
            />
          )} />
          <Route exact path='/community/share' render={(props) => (
            <ShareItems
              {...props}
              user={this.state.user}
            />
          )} />
          <Route exact path='/community/advice' render={(props) => (
            <Advice
              {...props}
              user={this.state.user}
            />
          )} />
          <Route exact path='/playdates' render={(props) => (
            <PlayDatesPage
              {...props}
              lat={this.state.lat}
              lng={this.state.lng}
              temp={this.state.temp}
              icon={this.state.icon}
              city={this.state.city}
              user={this.state.user}
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