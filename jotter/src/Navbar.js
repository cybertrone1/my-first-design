/* import { Link } from "react-router-dom"; */
//i done decide to use spa/ssr approach, that spa alone is after my life

const Navbar = () => {
    return ( 
        <nav className="navbar">
           <h1>The Jotter</h1>
           <div className="links">
               <a href="/">Home</a>
               <a href="/create">New Blog</a>
           </div>
        </nav>
     );
}
 
export default Navbar;