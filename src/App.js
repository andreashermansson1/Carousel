import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from "react-router-dom";
import Carousel from './Carousel'

function App() {
  return (
<div>
    <Carousel  autoPlay={true}
    interval={1000}
    controls={false}
    indicators={false}
    ride={true}/>
    </div>
  );
}

export default App;
