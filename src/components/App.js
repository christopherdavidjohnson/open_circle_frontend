import React from 'react';
import { HashRouter as HashRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Circles from "./pages/Circles";
import Messages from "./pages/Messages";
import Feed from "./pages/Feed";
import './stylesheets/App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">


          <div className="nav">
            <Link to="/homepage">Home</Link>
          </div>

          <div className="nav">
            <Link to="/login">Login</Link>
          </div>

          <div className="nav">
            <Link to="/signup">Signup</Link>
          </div>

          <div className="nav">
            <Link to="/profile">Profile</Link>
          </div>

          <div className="nav">
            <Link to="/circles">Circles</Link>
          </div>

          <div className="nav">
            <Link to="/messages">Messages</Link>
          </div>

          <div className="nav">
            <Link to="/feed">Feed</Link>
          </div>


        <Switch>

          <Route path="/login" component={Login}/>;
          <Route path="/signup" component={Signup}/>;
          <Route path="/profile" component={Profile}/>;
          <Route path="/circles" component={Circles}/>;
          <Route path="/messages" component={Messages}/>;
          <Route path="/feed" component={Feed}/>;
          <Route path="/" component={Home}/>;

        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
