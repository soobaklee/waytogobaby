import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import LoginPage from '../Login';
import SignupPage from '../Signup';
import Nav from '../../components/Nav/Nav';
import LandingPage from '../LandingPage';
import ProductsPage from '../ProductsPage';
import CommunityPage from '../CommunityPage';
import ShareItemsPage from '../ShareItemsPage';
import AdvicePage from '../AdvicePage';
import NewAdvicePage from '../NewAdvicePage';
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
      lng: null,
      advice: [],
      myProducts: [],
    }
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSetFilter = (field, value) => {
    this.setState = ({
      [field]: value
    })
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  getAdviceById = (id) => {
    return this.state.advice.find(advice => advice.id === id);
  }

  addProduct = (product) => {
    this.setState({
      myProducts: [...this.state.myProducts, product]
    })
  }

  removeProduct = (product) => {
    let idx = this.state.myProducts.indexOf(product);
    let newProductList = [...this.state.myProducts];
    newProductList.splice(idx, 1);
    this.setState({
      myProducts: [...newProductList]
    })
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
      city: weatherData.name,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"><Link to='/'><h1>WAY TO GO BABY :)</h1></Link></header>
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
              handleChange={this.handleChange}
              updateMessage={this.updateMessage}
            />
          )} />
          <Route exact path='/community/share' render={(props) => (
            <ShareItemsPage
              {...props}
              user={this.state.user}
              handleSetFilter={this.handleSetFilter}
              handleChange={this.handleChange}
              updateMessage={this.updateMessage}
            />
          )} />
          <Route path='/community/advice' render={(props) => (
            <AdvicePage
              {...props}
              user={this.state.user}
              handleSetFilter={this.handleSetFilter}
              getAdviceById={this.getAdviceById}
            />
          )} />
          <Route exact path='/community/advice/new' render={(props) => (
            <NewAdvicePage
              {...props}
              user={this.state.user}
            />
          )} />
          {/* <Route exact path='/community/advice/:id' render={(props) => (
            <AdviceDetailPage
              {...props}
              user={this.state.user}
              // advice={this.state.advice.find(advice => advice._id === props.match.params.advice_id)}
              getAdviceById={this.getAdviceById}
            />
          )} /> */}
          <Route exact path='/playdates' render={(props) => (
            <PlayDatesPage
              {...props}
              lat={this.state.lat}
              lng={this.state.lng}
              temp={this.state.temp}
              icon={this.state.icon}
              city={this.state.city}
              user={this.state.user}
              handleSetFilter={this.handleSetFilter}
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
        <div className='footer'>
          <p>Copyright 2019 Way To Go Baby</p>
        </div>
      </div >
    );
  }
}

export default App;
