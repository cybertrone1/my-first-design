import NavBar from "./NavBar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDes from "./MovieDes";

function App() {

  return (
    <Router>
      <div>
        < NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element= {< Home />} /> 
            <Route exact path='/movies/:id' element={< MovieDes />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
