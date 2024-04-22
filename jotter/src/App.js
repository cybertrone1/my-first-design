import Navbar from './Navbar';
import Homee from './Homee';
import NewBlog from './NewBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        < Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              < Homee />
            </Route>
            <Route exact path='/create'>
              < NewBlog />
            </Route>
            <Route exact path='/blogs/:id'>
              < BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default App;
