import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/homepage" component={Homepage}/>;
          <Route path="/profile" component={Profile}/>;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
