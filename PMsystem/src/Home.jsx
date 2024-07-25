import { useState } from "react";

/* child component 1a */
const Advert = () => {
    return(
        <div className="ads">
            <div className="logos">
                <img src="https://st.depositphotos.com/44273736/54272/v/450/depositphotos_542726218-stock-illustration-premium-download-icon-task-management.jpg" alt="task management" />
                <p>task management</p>
            </div>
            <div className="logos">
                <img src="https://cdn.prod.website-files.com/63a46653c8c1bd8363ec3e88/647f7319260affa8a9806381_istockphoto-1145840620-612x612.jpg" alt="request or proposal" />
                <p>request & approval</p>
            </div>
            <div className="logos">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/008/461/358/small/team-project-filled-line-icon-linear-style-sign-for-mobile-concept-and-web-design-outline-icon-symbol-logo-illustration-graphic-free-vector.jpg" alt="project management" />
                <p>project management</p>
            </div>
            <div className="logos">
                <img src="https://static.vecteezy.com/system/resources/previews/015/196/897/non_2x/abstract-colorful-rising-graph-success-arrow-and-star-logo-icon-finance-data-modern-lines-with-new-pop-art-colors-bold-line-clean-style-template-set-vector.jpg" alt="set goal" />
                <p>set goals</p>
            </div>
        </div>
    );
};

/* child component 1b */
const Intro = ( {handleButton} ) => {

    return (
        <div className="intro">
            <h1>
                manage and execute your code in one place
            </h1>
            <p>
                automate tasks and streamline processes with an easy-to-use platform
            </p>

            <button onClick={handleButton}>get started</button>
        </div>
    );
};

/* parent component 1 */
const LPage = ( {handleButton} ) => {
    return(
        <div className="Lpage">
            < Advert />
            < Intro handleButton={handleButton} />
        </div>
    );
};

/* parent component 2 */
const LogIn = ( {userName, setUserName, password, setPassword, message, handleSubmit} ) => {

    return(
        <div className="logIn">
            <form onSubmit={handleSubmit}>
                <label htmlFor="useername">username</label> <br />
                <input type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                /> <br />
                <label htmlFor="password">password</label> <br />
                <input type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />
                
                <p>{ message }</p> <br />

                <button>log in</button>
            </form>
        </div>
    );
};


const Home = () => {

    const [pending, isPending] = useState (true);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleButton = (e) => {
        e.preventDefault();
        isPending(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userName, password})
            })

            const data = await response.json();
            if(response.ok){
                alert(data.message);
            }else{
                setMessage("enter correct details")
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    

    return ( 
        <div className="homeContent">
            {
                pending ? (
                    < LPage handleButton={handleButton} />
                ) : (
                    < LogIn 
                        handleSubmit={handleSubmit}
                        userName={userName}
                        setUserName={setUserName}
                        password={password}
                        setPassword={setPassword}
                        message={message}
                     />
                )
            }
        </div>
     );
}
 
export default Home;