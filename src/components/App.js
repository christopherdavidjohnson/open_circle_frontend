import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Oh Hey!</h1>
        <h1>Hey! How's it going?</h1>
        <Switch>
          <Route path="/" component={Homepage}/>;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
