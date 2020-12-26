import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App