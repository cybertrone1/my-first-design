import Home from "./Home"
import NavBar from "./NavBar";

function App () {

  return(
    <div>
      < NavBar />
      <div className="home_content">
        < Home />
      </div>
    </div>
  )


}

export default App;