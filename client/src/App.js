import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./_components/Landing.js";
import Login from "./_components/Login.js";
import Signup from "./_components/Signup.js";
import Home from "./_components/Home.js";
import Bookmarks from "./_components/Bookmarks.js";
import Profile from "./_components/Profile.js";

import "./App.css";


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>

      <Switch>
        <Route path="/home" component={Home} />
      </Switch>

      <Switch>
        <Route path="/login" component={Login} />
      </Switch>

      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>

      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>


      <Switch>
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </div>

   );
}

export default App;
