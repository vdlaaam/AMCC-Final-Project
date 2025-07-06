// import hero from "..src/assets/hero.png";

const homepages = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="text-5xl/tight font-medium mb-7">
              Take Care Of Your <span className="font-bold text-sky-400">Mental Health</span>
            </h1>
            <p className="text-base/8 mb-7">Start journaling today to improve your mood and overall well-being</p>
            <a href="#" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Get Started <i className="ri-eye-line ms-1"></i></a>
          </div>
          {/* <img src={hero} alt="hero" className ="md:w-full" /> */}
        </div>
      </div>

    </div>
  )
}

export default homepages