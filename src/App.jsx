import "./App.css";
import ganeshotsav from "./assets/ganeshutsav.jpeg";
import vadan from "./assets/vadana.jpeg";
import jallosh from "./assets/utsava.jpeg";
import jagdamb from "./assets/jagdamb.png";
import atharv from "./assets/atharv.jpeg";
import manav from "./assets/Manav.jpeg";
import piyush from "./assets/piyush.jpeg";
import pavan from "./assets/pavanCharde.jpeg";
import heroPotrait from "./assets/potrait.jpeg";
import heroLandscape from "./assets/landscape.jpeg";
import Maharaj from "./assets/shivajiMaharaj.jpeg";
import sher from "./assets/sher.jpeg";
import devanshu from "./assets/devanshu.jpeg";
import journeyImage from "./assets/journeyImage.jpeg";
import contactImage from "./assets/contactImage.jpeg";

import img2 from "./assets/img-2.jpeg";
import img4 from "./assets/img-4.jpeg";
import img5 from "./assets/img-5.jpeg";
import img3 from "./assets/img-3.jpeg";
import img6 from "./assets/img-6.jpeg";
import img7 from "./assets/img-7.jpeg";









const gallery = [
  {
    image: ganeshotsav,
    title: "गणेशोत्सव",
  },
  {
    image: vadan,
    title: "वादनाची झलक",
  },
  {
    image: img2,
    title: "उत्सवाचा जल्लोष",
  },
  {
    image:
      img6,
    title: "पथकाची ऊर्जा",
  },
   {
    image:
      img7,
    title: "उत्साहाची लय",
  },
   {
    image:
      img3,
    title: "परंपरेचा अभिमान",
  },
   {
    image:
      img4,
    title: "परंपरेची शान",
  },
   {
    image:
      img5,
    title: "जोशाची गर्जना",
  },
];

function App() {
  return (
    <div className="site">
      {/* HERO */}
      <section className="hero">
        <div className="hero-image">
          <picture>
            <source media="(max-width: 800px)" srcSet={heroPotrait} />

            <img src={heroLandscape} alt="उत्सव" />
          </picture>
        </div>

      
      </section>

      {/* INTRO */}
      <section className="intro" id="about"
       style={{
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ), url(${Maharaj})`,
  }}
      >
        

        <div className="intro-content">
          <p className="section-label">जगदंब विषयी</p>

          <h2>
            नाद फक्त ढोलाचा नाही,
            <br />
            <span>तो आपल्या संस्कृतीचा आहे.</span>
          </h2>

          <p className="large-text">
            ढोल-ताशाच्या गजरातून महाराष्ट्राची समृद्ध परंपरा, संस्कृती आणि
            एकजुटीची भावना जपण्याचा जगदंबचा प्रयत्न.
          </p>

          <p className="body-text">
            शिस्त, समर्पण, ऊर्जा आणि टीमवर्क या मूल्यांवर उभे असलेले जगदंब ढोल
            ताशा पथक विविध उत्सव आणि सांस्कृतिक कार्यक्रमांमध्ये आपल्या वादनातून
            एक वेगळीच ऊर्जा निर्माण करते.
          </p>
        </div>
      </section>


      {/* TRADITION */}
      <section className="tradition" id="tradition">
        <div className="main-section-heading">
          <div className="section-heading-left"
          style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
      url(${sher})
    `,
  }}
          >
            <p className="section-label">आमची ओळख</p>

            <h2>
              तीन गोष्टी,
              <br />
              <span>एकच भावना.</span>
            </h2>
          </div>

          <div className="main-section-right">
            <div className="tradition-cards">
              {/* <div className="card-number">०१</div> */}
              <div className="instruments">
                <img src={pavan} alt="जगदंब" />
              </div>
              <h2>पवन चारदे</h2>
              <p>पथक प्रमुख</p>
            </div>
          </div>
        </div>

        <div className="tradition-grid">
           <div className="tradition-card">
            {/* <div className="card-number">०३</div> */}
            <div className="instrument">
              <img src={atharv} alt="जगदंब" />
            </div>
            <h3>अथर्व पानबुडे</h3>
            <h2>ध्वज प्रमुख</h2>
            <p>परंपरा, अभिमान आणि एकजुटीचे प्रतीक.</p>
          </div>
          <div className="tradition-card">
            {/* <div className="card-number">०१</div> */}
            <div className="instrument">
              <img src={manav} alt="जगदंब" />
            </div>
            <h3>मानव सोंटक्के</h3>
            <h2>ढोल प्रमुख</h2>
            <p>प्रत्येक ठोक्यात ऊर्जा, जोश आणि उत्साह.</p>
          </div>

          

           <div className="tradition-card">
            {/* <div className="card-number">०१</div> */}
            <div className="instrument">
              <img src={devanshu} alt="जगदंब" />
            </div>
            <h3>देवांशु धवाड</h3>
            <h2>ताशा प्रमुख</h2>
            <p>ताशाच्या गजरात जागतो उत्सवाचा जोश.</p>
          </div>

          <div className="tradition-card featured">
            {/* <div className="card-number">०२</div> */}
            <div className="instrument">
              <img src={piyush} alt="जगदंब" />
            </div>
            <h3>पियुष चौधरी</h3>
            <h2>ताशा प्रमुख</h2>
            <p>ताल आणि लयीतून निर्माण होणारा उत्सवाचा नाद.</p>
          </div>

         
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${contactImage})`,
  }}
      >
        <div className="section-heading">
          <p className="section-label">आमचा प्रवास</p>

          <h2>
            नादाची सुरुवात
            <br />
            <span>आणि पुढचा प्रवास.</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <span>०१</span>
            <div>
              <h3>सुरुवात</h3>
              <p>एका विचारातून सुरू झालेला हा प्रवास.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>०२</span>
            <div>
              <h3>एकजूट</h3>
              <p>वादनासोबत वाढत गेलेले नाते आणि टीमवर्क.</p>
            </div>
          </div>

          <div className="timeline-item">
            <span>०३</span>
            <div>
              <h3>नवीन पर्व</h3>
              <p>परंपरा जपत नव्या पिढीसोबत पुढे जाण्याचा संकल्प.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="section-label">आमच्या आठवणी</p>
            <h2>
              गॅलरी <span>↗</span>
            </h2>
          </div>

          <p>
            काही क्षण कॅमेऱ्यात,
            <br />
            काही कायम मनात.
          </p>
        </div>

        <div className="gallery">
          {gallery.map((item, index) => (
            <div className={`gallery-item gallery-${index + 1}`} key={index}>
              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">
                <span>०{index + 1}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN */}
      {/* <section className="join" id="join">

        <div className="join-bg"></div>

        <div className="join-content">

          <p className="section-label">जगदंब परिवार</p>

          <h2>
            तुम्हालाही
            <br />
            <span>या नादाचा भाग व्हायचंय?</span>
          </h2>

          <p>
            तुमच्यात उत्साह आहे? तालाची आवड आहे?
            मग या प्रवासाचा एक भाग बना.
          </p>

          <a href="#contact" className="primary-btn">
            सहभागी व्हा →
          </a>

        </div>

      </section> */}

      {/* CONTACT */}
      <section className="contact" id="contact"
      style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${journeyImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
        <div className="contact-left">
          <p className="section-label">संपर्क</p>

          <h2>
            चला,
            <br />
            <span>एकत्र नाद करूया.</span>
          </h2>
        </div>

        <div className="contact-right">
          <div className="contact-row">
            <span>स्थान</span>
            <strong>नागपूर, महाराष्ट्र</strong>
          </div>

          <div className="contact-row">
            <span>Instagram</span>
            <strong>@jagdamb_nagpur</strong>
          </div>

          <div className="contact-row">
            <span>संपर्क</span>
            <strong>+91 91457 97993</strong>
          </div>

          <a
            href="https://www.instagram.com/jagdamb_nagpur?stkn=MThjMzdpYWtzNmk3Zg=="
            className="contact-button"
          >
            Instagram वर भेट द्या ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo logo">
          <span>
            <img src={jagdamb} alt="जगदंब" />
          </span>
          <div>
            <strong>जगदंब</strong><br></br>
            <small>ढोल ताशा पथक </small>
            <small>2019</small>
          </div>
        </div>

       <div className="parampara"> <p>परंपरेचा नाद जपूया. संस्कृती पुढे नेऊया.</p>

        <span> जगदंब, नागपूर</span><br />
        <h6>~created by Elvrix TechSolution</h6>
        </div>
       
      </footer>
    </div>
  );
}

export default App;
