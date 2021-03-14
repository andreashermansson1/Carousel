import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (

    <div className="App">
          <BrowserRouter>
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
