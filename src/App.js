import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
    )
  }
}

export default App