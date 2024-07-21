const MyProfile = () => {
    return ( 
        <div className="profile-content">
            <section className="profile-section">
                <div className="profileImage">
{/*                     <img src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" alt="" /> */}
                </div>
                <div className="logs">
                    <a href="/profile/login">
                        <button>log in</button>
                    </a>
                    <a href="/profile/signup">
                        <button>sign up</button>
                    </a>
                </div>
            </section>
            <section className="logs-section">
                <a href="/shop">
                    <div className="content1">
                        <div className="content-img">

                        </div>
                        <p>shop</p>
                    </div>
                </a>
                <a href="/newStand">
                    <div className="content2">
                        <div className="content-img">

                        </div>
                        <p>newstand</p>
                    </div>
                </a>
                <a href="/basket">
                    <div className="content3">
                        <div className="content-img">

                        </div>
                        <p>basket</p>
                    </div>
                </a>
            </section>

        </div>
     );
}
 
export default MyProfile;