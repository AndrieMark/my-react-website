
import "../CSS/Home.css";
import video2 from "../Assests/video-1.mp4";
import Content from "../MainSection/Content";
import FooterSection from "../MainSection/Footer";

function Home () {
  return (
      <>
             <div className="hero-container">
            <video className="bg-video" src={video2} autoPlay loop muted />
            <div className="hero-content">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem.</p>
                <div className="hero-btns">
                <a href="#get-started">Lorem, ipsum.</a>
                <a href="#watch-trailer">Lorem, ipsum.</a>
                </div>
            </div>
            </div>

            {/* ✅ Content section below the hero */}
            <div className="content-section">
                <Content />
            </div> 

         {/* ✅ Footer section below the hero */}
            <div>
                <FooterSection/>
            </div>


      </>


  );
}

export default Home;






















