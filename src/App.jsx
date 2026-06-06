import DataImage from "./data"

function App() {

  return (
    <>
    <div className="hero grid lg:grid-cols-2">
      <div className="hero-copy">
        <p className="hero-eyebrow">Halo, Saya</p>
        <h1 className="hero-title">
          Usamah Ghozi
          <span>Robbani</span>
        </h1>
        <p className="hero-role">Backend Developer</p>
        <p className="hero-desc">
         Backend Developer dengan fokus pada pengembangan web, API, dan database.
        </p>
        <div className="hero-actions">
          <a href="https://github.com/Gojikkk" className="hero-button hero-button-primary" target="_blank" rel="noopener noreferrer">
            Github <i className="ri-github-fill ri-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/usamah-ghozi-robbani" className="hero-button hero-button-linkedin" target="_blank" rel="noopener noreferrer">
            LinkedIn <i className="ri-linkedin-box-fill ri-lg"></i>
          </a>
          <a href="#" className="hero-button hero-button-secondary">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <div className="hero-gallery justify-self-center">
        <div className="gallery-photo gallery-photo-tall">
          <img src={DataImage.Goji3} alt="Goji 3" />
        </div>
        <div className="gallery-photo gallery-photo-goji1">
          <img src={DataImage.Goji1} alt="Goji 1" />
        </div>
        <div className="gallery-photo">
          <img src={DataImage.Goji5} alt="Goji 5" />
        </div>
        <div className="gallery-photo gallery-photo-wide">
          <img src={DataImage.Goji4} alt="Goji 4" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App
 
