import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'
import List from './components/lists'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Github</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/:username/repositories">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}