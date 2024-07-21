import NavBar from "./NavBar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDes from "./MovieDes";
import Booking_Ticket from "./Booking_Ticket";

function App() {

  return (
    <Router>
      <div>
        < NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element= {< Home />} /> 
            <Route exact path='/movies/:id' element={< MovieDes />} />
            <Route exact path='/movies/:id/ticket' element={ < Booking_Ticket /> } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
