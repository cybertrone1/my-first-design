const MyProfile = () => {
    return ( 
        <div className="profile-content">
            <form>
                <label>name</label>
                <input
                    type="text"
                    required
                />
                <label>phone number</label>
                <input
                    type="text"
                    required
                />
                <label>Gmail</label>
                <input
                    type="mail"
                    required
                />
                <label>password</label>
                <input
                    type="password"
                    required
                />
                <label>check password</label>
                <input
                    type="password"
                    required
                />
                <a href="/login">
                    <button>sign in</button>
                </a>
                <a href="/profile/login">
                   <h2>create account</h2>
                </a>
            </form>
        </div>
     );
}
 
export default MyProfile;