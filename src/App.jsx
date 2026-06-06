import DataImage from "./data"

function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 ">
      <div>
        <div className="flex items-center gap-3 mb-5 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>Kode yang indah lahir dari ketekunan.</q>
        </div>
        <h1>Usamah Ghozi Robbani</h1>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]" />
    </div>
    </>
  );
}

export default App
 