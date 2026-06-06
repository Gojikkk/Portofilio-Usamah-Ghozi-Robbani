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

    <section className="about-section" id="tentang">
      <div className="about-heading">
        <p className="about-eyebrow">Tentang Saya</p>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-visual">
          <div className="about-photo-card" aria-label="Foto about me">
            <div className="about-photo-inner">
              <img className="about-photo about-photo-front" src={DataImage.Goji2} alt="Usamah Ghozi Robbani" />
              <img className="about-photo about-photo-back" src={DataImage.JsonImage} alt="JSON illustration" />
            </div>
          </div>
        </div>

        <div className="about-info">
          <div className="about-card about-card-main">
            <p>
              Saya adalah mahasiswa Sistem Informasi yang memiliki minat di bidang Back-End Development,
              khususnya dalam pengembangan API dan pengelolaan database. Saya senang membangun aplikasi web
              yang efisien, terstruktur, dan dapat memberikan solusi untuk permasalahan nyata.
            </p>
            <p>
              Saya memiliki pengalaman menggunakan JavaScript dengan Node.js dan Express.js untuk membangun
              RESTful API dan mengelola database. Selain itu, saya juga memiliki pemahaman dasar mengenai PHP
              dan Java.
            </p>  
          </div>

          <div className="about-detail-grid">
            <div className="about-card about-detail-card">
              <i className="ri-graduation-cap-fill ri-xl"></i>
              <div>
                <p className="about-detail-title">Education</p>
                <p>Information Systems Student</p>
              </div>
            </div>
            <div className="about-card about-detail-card">
              <i className="ri-map-pin-2-fill ri-xl"></i>
              <div>
                <p className="about-detail-title">Location</p>
                <p>Depok, Jawa Barat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App
