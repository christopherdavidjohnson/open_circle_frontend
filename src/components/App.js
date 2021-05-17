import React from 'react';
import { HashRouter as HashRouter, Switch, Route, Link} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

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
        </ul>


        <Switch>
          <Route path="/homepage" component={Homepage}/>;
          <Route path="/profile" component={Profile}/>;
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
