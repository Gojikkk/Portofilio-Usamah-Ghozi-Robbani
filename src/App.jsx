import { listProyek } from "./data";

const DataImage = {
  Goji1: "/assets/goji1.webp",
  Goji2: "/assets/goji2.webp",
  Goji3: "/assets/goji3.webp",
  Goji4: "/assets/goji4.webp",
  Goji5: "/assets/goji5.webp",
  JsonImage: "/assets/json.webp",
}

const listTools = [
  {
    id: 1,
    gambar: "/assets/tools/js.png",
    nama: "JavaScript",
    ket: "Language",
    warna: "#f7df1e",
    gambarAsli: true,
  },
  {
    id: 2,
    gambar: "/assets/tools/nodejs.png",
    nama: "Node JS",
    ket: "Framework",
    warna: "#5fa04e",
  },
  {
    id: 3,
    gambar: "/assets/tools/express.png",
    nama: "Express JS",
    ket: "Framework",
    warna: "#ffffff",
  },
  {
    id: 4,
    gambar: "/assets/tools/php.png",
    nama: "PHP",
    ket: "Language",
    warna: "#777BB4",
  },
  {
    id: 5,
    gambar: "/assets/tools/c.png",
    nama: "C",
    ket: "Language",
    warna: "#A8B9CC",
  },
  {
    id: 6,
    gambar: "/assets/tools/mongodb.png",
    nama: "MongoDB",
    ket: "Database",
    warna: "#47A248",
  },
  {
    id: 7,
    gambar: "/assets/tools/mysql.png",
    nama: "MySQL",
    ket: "Database",
    warna: "#4479A1",
  },
  {
    id: 8,
    gambar: "/assets/tools/postgresql.png",
    nama: "PostgreSQL",
    ket: "Database",
    warna: "#4169E1",
  },
  {
    id: 10,
    gambar: "/assets/tools/github.png",
    nama: "Github",
    ket: "Repository",
    warna: "#ffffff",
    gambarAsli: true,
  },
  {
    id: 11,
    gambar: "/assets/tools/git.png",
    nama: "Git",
    ket: "Version Control",
    warna: "#F03C2E",
  },
  {
    id: 12,
    gambar: "/assets/tools/vercel.png",
    nama: "Vercel",
    ket: "Deployment Platform",
    warna: "#ffffff",
  },
  {
    id: 13,
    gambar: "/assets/tools/postman.png",
    nama: "Postman",
    ket: "API Testing Tool",
    warna: "#FF6C37",
  },
]

const toolMotions = [
  { y: "0px", x: "2px", xBack: "-1px", floatY: "-5px", duration: "5600ms", phase: "-300ms" },
  { y: "6px", x: "-2px", xBack: "1px", floatY: "-4px", duration: "6200ms", phase: "-1600ms" },
  { y: "0px", x: "1px", xBack: "-2px", floatY: "-6px", duration: "5900ms", phase: "-900ms" },
  { y: "6px", x: "-1px", xBack: "2px", floatY: "-5px", duration: "6500ms", phase: "-2400ms" },
  { y: "0px", x: "-2px", xBack: "1px", floatY: "-4px", duration: "6000ms", phase: "-1300ms" },
  { y: "6px", x: "2px", xBack: "-1px", floatY: "-6px", duration: "6800ms", phase: "-500ms" },
  { y: "0px", x: "-1px", xBack: "2px", floatY: "-5px", duration: "5700ms", phase: "-2100ms" },
  { y: "6px", x: "1px", xBack: "-2px", floatY: "-4px", duration: "6300ms", phase: "-1200ms" },
  { y: "0px", x: "2px", xBack: "-1px", floatY: "-6px", duration: "6600ms", phase: "-3000ms" },
  { y: "6px", x: "-2px", xBack: "1px", floatY: "-5px", duration: "5800ms", phase: "-700ms" },
  { y: "0px", x: "1px", xBack: "-2px", floatY: "-4px", duration: "6400ms", phase: "-2600ms" },
  { y: "6px", x: "-1px", xBack: "2px", floatY: "-5px", duration: "6100ms", phase: "-100ms" },
]

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
          <a href="#proyek" className="hero-button hero-button-secondary">
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

    <section className="tools-section" id="tools">
      <div className="tools-heading">
        <p className="tools-eyebrow">Tech Stack</p>
        <h2>Tools yang Saya Gunakan</h2>
      </div>

      <div className="tools-box">
        {listTools.map((tool, index) => {
          const motion = toolMotions[index % toolMotions.length]

          return (
          <article
            className="tool-card"
            key={tool.id}
            style={{
              "--tool-color": tool.warna,
              "--delay": `${index * 55}ms`,
              "--rest-y": motion.y,
              "--float-x": motion.x,
              "--float-x-back": motion.xBack,
              "--float-y": motion.floatY,
              "--float-duration": motion.duration,
              "--float-phase": motion.phase,
            }}
          >
            <div className="tool-icon-wrap">
              {tool.gambarAsli ? (
                <img className="tool-icon tool-icon-image" src={tool.gambar} alt={tool.nama} />
              ) : (
                <span
                  aria-label={tool.nama}
                  role="img"
                  className="tool-icon"
                  style={{
                    backgroundColor: tool.warna,
                    WebkitMask: `url(${tool.gambar}) center / contain no-repeat`,
                    mask: `url(${tool.gambar}) center / contain no-repeat`,
                  }}
                ></span>
              )}
            </div>
            <div className="tool-info">
              <h4>{tool.nama}</h4>
              <p>{tool.ket}</p>
            </div>
          </article>
          )
        })}
      </div>
    </section>

    {/* Proyek */}
    <section className="project-section" id="proyek">
      <div className="project-heading">
        <p className="project-eyebrow">Selected Work</p>
        <h2>Proyek</h2>
        <p>
          Berikut ini proyek yang telah saya kerjakan, baik secara individu maupun dalam tim. Proyek-proyek ini mencakup berbagai jenis web, API, dan database yang menunjukkan kemampuan saya dalam pengembangan backend.
        </p>
      </div>
      <div className="projectbox">
        {listProyek.map((proyek, index) => (
          <article className="project-card" key={proyek.id} style={{ "--project-delay": `${index * 120}ms` }}>
            <div className="project-image-wrap">
              <img src={proyek.gambar} alt={proyek.nama} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  {proyek.link && (
                    <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="ri-external-link-line"></i>
                      Demo
                    </a>
                  )}
                  {proyek.linkGithub && (
                    <a href={proyek.linkGithub} target="_blank" rel="noopener noreferrer" className="project-link project-link-ghost">
                      <i className="ri-github-fill"></i>
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <span className="project-number">0{index + 1}</span>
              <h3 className="project-title">{proyek.nama}</h3>
              <p className="project-description">{proyek.desk}</p>
              <div className="project-tools">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="project-tool">{tool}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    {/* Proyek */}
    </>
  );
}

export default App
