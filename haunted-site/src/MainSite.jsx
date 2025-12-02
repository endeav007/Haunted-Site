
import './styles.css'

function MainPage(){

    return (
    <>
        <div className="landing-page section"> 
            <div className="title-image"> 
                <div className = "logo">
                    <h3> Dream </h3>
                    <h1> BIG! </h1>
                </div>
            </div>
            <div className="learn-more">
                <h1> Learn More !</h1>
                <button> yess </button>
            </div>
        </div>
        <div className="description section">
            <img src="BirthdayPhoto.png" />
            <p> Hellooooo </p>
        </div>
        <div className="section-header"> Our Values</div>
        <div className="values section">
            <div className="column">
                <p> One </p>
            </div>
            <div className="column">
                <p> two </p>
            </div>
            <div className="column">
                <p> three </p>
            </div>
        </div>

        <div className="contact"> 
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
    </>
        
    );
}


export default MainPage;