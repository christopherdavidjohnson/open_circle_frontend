import React from 'react';
import { HashRouter as HashRouter, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Circles from "./pages/Circles";
import Messages from "./pages/Messages";
import Feed from "./pages/Feed";

function App() {
  return (
    <HashRouter>
      <div className="App">

        <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/circles">Circles</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
        </ul>


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
