import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Booking_Ticket = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({movieId: id, userName, userEmail})
            });

            const data = await response.json();
            if(response.ok){
                setMessage("Booking successful!");

                setTimeout(() => {
                    navigate("/")
                }, 3000);
            }else{
                setMessage(`Booking Failed: ${data.message}`)
            }
        } catch (error) {
            setMessage(`Booking Failed: ${error.message}`)
        }
    }
    return (
        <div className="booking-content">
            <div className="bookingSystem">
                <h2>book my ticket</h2>
                <p>enter the required details</p>
                <p className="alert">payment will be made at the cinema!!</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        username:
                    </label><br />
                    <input type="text"
                        required
                        value={userName}
                        onChange={ (e) => setUserName(e.target.value) }
                        placeholder="username"
                    /> <br />
                    <label>
                        email:
                    </label> <br />
                    <input type="email" 
                        required
                        value={userEmail}
                        onChange={ (e) => setUserEmail(e.target.value) }
                        placeholder="bookmyticket@gmail.com"
                    /> <br />
                    <button>book ticket</button>
                </form>
                {
                    message && <div className="loadingMessage">
                        <p> { message } </p>
                        <p>kindly wait while the page reload!!!</p>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Booking_Ticket;