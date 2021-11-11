import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contacts from './Contacts';
import Details from './Details';
import Login from './Login';
import HomePage from './Components/Homepage'
import WomenClothing from './Components/WomenClothing';
import MenClothing from './Components/MenClothing';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/details">Details</Link>
        </div>
        <hr/> */}

        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route path="/home" component={HomePage}/>
          <Route path="/details" component={Details}/>
          <Route path="/womenApparels" component={WomenClothing}/>
          <Route path="/menApparels" component={MenClothing}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
