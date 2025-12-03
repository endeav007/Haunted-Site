
import './styles.css'


function MainPage(){

    return (
    <>
        <div className="landing-page section"> 
            <div className="title-image"> 
                <div className = "logo">
                    <img src="LeftLines.png" />
                    <img src="DreamBigText.png" />
                    <img src="RightLines.png" />
                </div>
            </div>
            <div className="learn-more">
                <h1> Learn More !</h1>
                <button> </button>
            </div>
        </div>
        <div className="description section">
            <div className = "info" >
                <img src="BirthdayPhoto.png" />
                <div classname="side-text">
                    <h1> Yahoo </h1>
                    <p> 
                        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.

                        Dream BIG! Dream BIG! Dream BIG! 

                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


                    </p>
                </div>
            </div> 
        </div>
        <div className="section-header"> <h1>Our Values</h1></div>
        <div className="values section">
            <div className="column">
                <h1> Values </h1>
                <img src="./Image1_OG.jpg" />
            </div>
            <div className="column">
                <h1> Vibes </h1>
                <img src="./Image1_OG.jpg" />
            </div>
            <div className="column">
                <h1> VDreamBig! </h1>
                <img src="./Image1_OG.jpg" />
            </div>
        </div>

        <div className="contact section"> 
            <img src="BirthdayPhoto.png" />
            <div>
                <h1> Header </h1>
                <p> Test </p>
                <form> 
                    <label for="form-first">First name</label><br></br>
                    <input type="text" id="form-first" name="form-first"/> <br></br>
                    <label for="form-last">Last name</label><br></br>
                    <input type="text" id="form-last" name="form-last"/> <br></br>
                    <label for="form-email">Email</label><br></br>
                    <input type="text" id="form-email" name="form-email"/> <br></br>
                    <label for="form-num">Phone Number</label><br></br>
                    <input type="text" id="form-num" name="form-num"/> <br></br>
                </form>
            </div>
        </div>

        <footer>
            Last Updated: 12/3/2025
        </footer>
    </>
        
    );
}


export default MainPage;