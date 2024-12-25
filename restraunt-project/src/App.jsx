import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Toplist from "./Components/Toplist/Toplist";
import bigimg from '../../restraunt-project/src/images/paneer.png'
import Banner from "./Components/Banner/Banner";
import Ourservices from "./Components/Ourservices/Ourservices";
// import bigimg from '../../restraunt-project/src/images/chilly.png'


const bgStyle = {
  backgroundImage: `url(${bigimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
};


const App = () => {
  return (
    <>
      <div  style={bgStyle}    className="overflow-x-hidden">
       <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
       <Navbar/>
        <Hero/>
        <Toplist/>
        <Banner/>
        <Ourservices/>
       </div>
      </div>
    </>
  )
}

export default App;
