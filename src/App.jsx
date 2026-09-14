
import "./App.css";
import ganeshotsav from "./assets/ganeshutsav.jpeg";
import vadan from "./assets/vadana.jpeg";
import jallosh from "./assets/utsava.jpeg";
import jagdamb from "./assets/jagdamb.png";

const gallery = [
  {
    image:
      ganeshotsav,
    title: "गणेशोत्सव",
  },
  {
    image:
      vadan,
    title: "वादनाची झलक",
  },
  {
    image:
      jallosh,
    title: "उत्सवाचा जल्लोष",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
    title: "पथकाची ऊर्जा",
  },
];

function App() {
  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <span><img src="\src\assets\jagdamb.png" alt="" /></span>
          <div>
            <strong>जगदंब</strong>
            <small>ढोल ताशा पथक</small>
            <small>2019</small>
          </div>
        </div>

        <nav>
          <a href="#about">आमच्याबद्दल</a>
          <a href="#tradition">परंपरा</a>
          <a href="#gallery">गॅलरी</a>
          <a href="#contact">संपर्क</a>
        </nav>

        <a href="#contact" className="nav-btn">
          सहभागी व्हा
        </a>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000&q=85"
            alt="उत्सव"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          {/* <p className="eyebrow">नागपूर • महाराष्ट्र</p> */}
           
           <div className="jagdamb-photo">
         <img src={jagdamb} alt="जगदंब" />
           </div>

          <h1>
            जगदंब
            <span>ढोल ताशा पथक</span>
          </h1>

          <p className="hero-description">
            परंपरेचा नाद • संस्कृतीचा अभिमान • एकजुटीची ओळख
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              आमच्याबद्दल ↓
            </a>

            <a href="#gallery" className="outline-btn">
              गॅलरी पाहा
            </a>
          </div>

        </div>

        <div className="hero-bottom">
          <span>०१</span>
          <div></div>
          <span>परंपरेचा प्रवास</span>
        </div>

      </section>

      {/* INTRO */}
      <section className="intro" id="about">

        <div className="section-number">०१</div>

        <div className="intro-content">

          <p className="section-label">जगदंब विषयी</p>

          <h2>
            नाद फक्त ढोलाचा नाही,
            <br />
            <span>तो आपल्या संस्कृतीचा आहे.</span>
          </h2>

          <p className="large-text">
            ढोल-ताशाच्या गजरातून महाराष्ट्राची समृद्ध परंपरा,
            संस्कृती आणि एकजुटीची भावना जपण्याचा जगदंबचा प्रयत्न.
          </p>

          <p className="body-text">
            शिस्त, समर्पण, ऊर्जा आणि टीमवर्क या मूल्यांवर उभे असलेले
            जगदंब ढोल ताशा पथक विविध उत्सव आणि सांस्कृतिक कार्यक्रमांमध्ये
            आपल्या वादनातून एक वेगळीच ऊर्जा निर्माण करते.
          </p>

        </div>

       
      </section>

      {/* STATS */}
      {/* <section className="stats">

        <div className="stat">
          <strong>०१</strong>
          <span>एक परिवार</span>
        </div>

        <div className="stat">
          <strong>∞</strong>
          <span>अखंड ऊर्जा</span>
        </div>

        <div className="stat">
          <strong>🥁</strong>
          <span>एकच नाद</span>
        </div>

        <div className="stat">
          <strong>🚩</strong>
          <span>एकच अभिमान</span>
        </div>

      </section> */}

      {/* TRADITION */}
      <section className="tradition" id="tradition">
       <div className="main-section-heading">
        <div className="section-heading-left">
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
            <div className="instruments"><img src="\src\assets\pavanCharde.jpeg" alt="" /></div>
            <h2>पवन चारदे</h2>
            <p>पथक प्रमुख</p>
            
            
          </div>
        

        </div>
       </div> 

        <div className="tradition-grid">

          <div className="tradition-card">
            {/* <div className="card-number">०१</div> */}
            <div className="instrument"><img src="\src\assets\Manav.jpeg" alt="" /></div>
            <h3>मानव सोंटक्के</h3>
            <h2>ढोल</h2>
            <p>
              प्रत्येक ठोक्यात ऊर्जा, जोश आणि उत्साह.
            </p>
          </div>

          <div className="tradition-card featured">
            {/* <div className="card-number">०२</div> */}
            <div className="instrument"><img src="\src\assets\Piyusha.jpeg" alt="" /></div>
             <h3>पियुष चौधरी</h3>
            <h2>ताशा</h2>
            <p>
              ताल आणि लयीतून निर्माण होणारा उत्सवाचा नाद.
            </p>
          </div>

          <div className="tradition-card">
            {/* <div className="card-number">०३</div> */}
            <div className="instrument"><img src="\src\assets\atharv.jpeg" alt="" /></div>
            <h3>अथर्व पानबुडे</h3>
            <h2>ध्वज</h2>
            <p>
              परंपरा, अभिमान आणि एकजुटीचे प्रतीक.
            </p>
          </div>

        </div>

      </section>

      {/* JOURNEY */}
      <section className="journey">

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
              <p>
                एका विचारातून सुरू झालेला हा प्रवास.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>०२</span>
            <div>
              <h3>एकजूट</h3>
              <p>
                वादनासोबत वाढत गेलेले नाते आणि टीमवर्क.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <span>०३</span>
            <div>
              <h3>नवीन पर्व</h3>
              <p>
                परंपरा जपत नव्या पिढीसोबत पुढे जाण्याचा संकल्प.
              </p>
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
            <div
              className={`gallery-item gallery-${index + 1}`}
              key={index}
            >
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
      <section className="contact" id="contact">

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

          <a href="https://www.instagram.com/jagdamb_nagpur?stkn=MThjMzdpYWtzNmk3Zg==" className="contact-button">
            Instagram वर भेट द्या ↗
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo logo">
          <span><img src="\src\assets\jagdamb.png" alt="" /></span>
          <div>
            <strong>जगदंब</strong>
            <small>ढोल ताशा पथक </small>
            <small>2019</small>
          </div>
        </div>

        <p>
          परंपरेचा नाद जपूया. संस्कृती पुढे नेऊया.
        </p>

        <span> जगदंब, नागपूर</span>

      </footer>

    </div>
  );
}

export default App;

