import { useState } from "react";

const Login = () => {

    const [click, setClick] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();
        setClick(true);
    }

    return ( 
        <div className="profile-content">
        <form>
            <label>name</label>
            <input
                type="text"
                required
            />
            <label>password</label>
            <input
                type="password"
                required
            />
            <button onClick={(e) => clickHandler()}>sign in</button>
            <div> {click && <h2>successfully</h2> } </div>
        </form>
    </div>
     );
}
 
export default Login;