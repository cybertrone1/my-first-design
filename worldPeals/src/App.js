import NavBar from './NavBar';
import Home from './home';
import Shops from './Shops';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewStand from './NewStand';
import MyProfile from './Myprofile';
import Login from './Login';
import signUp from './signUp';

function App() {
  return (
    <Router>
      <div className="App">
        <  NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                < Home />
              </Route>
              <Route exact path="/shop">
                < Shops />
              </Route>
              <Route exact path="/newStand">
                < NewStand />
              </Route>
              <Route exact path="/profile">
                 < MyProfile />
              </Route>
              <Route exact path="/profile/login">
                 < Login />
              </Route>
              <Route exact path="/profile/signup">
                < signUp />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
