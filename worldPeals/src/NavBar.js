const NavBar = () => {
    return ( 
        <div className="Navbar">
            <h1>world peas</h1>
            <div className="links">
                <a href="/shop">Shop</a>
                <a href="/newStand">Newstand</a>
                <a href="/">Who we are</a>
                <a href="/profile">My profile</a>
            </div>
            <div className="carton-button">
                <a href="/">Basket</a>
            </div>
        </div>
     );
}
 
export default NavBar;