import Navbar from "./Nav";
import Collage from '../assets/collage.png'


function Hero() {
  return (
    <>
      <div id="home" className="hero h-[85vh]">
        <Navbar />
        <div className="flex flex-col lg:flex-row">
            <div className="w-1/2 mx-20 h-[400px] bg-transparent flex items-center justify-center ">
                <h1 className="text-[45px] lg:mt-56 text-[#2c2c50] font-extrabold">Your <span className="text-white">One-Stop Destination</span> for Pharmacy, Lab Tests, Groceries, Fast Food, Travel, and E-Vehicles.</h1>
            </div>
            <div className="w-1/2">
                <img className="mt-28" src={Collage} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
