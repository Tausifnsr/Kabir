import { GiMedicinePills } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdLocalGroceryStore, MdElectricCar } from "react-icons/md";
import { FaComputer, FaCar } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";

function Services() {
  return (
    <div id="services" className="w-[90vw] mx-auto mt-10 pt-10 pb-16 border-b-2 border-slate-200">
      <h1 className="ml-10 text-slate-500 font-semibold">Our Services</h1>
      <h1 className="text-[60px] ml-10 mt-4 text-[#2c2c50]">
        <span className="font-bold text-[#2d7250]">One-Stop Solution</span> For
        All Your Needs
      </h1>
      <div className="serviceBox flex flex-col lg:flex-row w-[80vw] mx-auto mt-20">
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <GiMedicinePills className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">Pharma</h1>
          <p className="my-4 mx-6 text-slate-700">
            Order Medicines Online and get them at your Doorstep.
          </p>
          <button className="text-[#2d7250]  text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <ImSpoonKnife className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">Restaurant</h1>
          <p className="my-4 mx-6 text-slate-700">
            Dine-In or Order Food Online.
          </p>
          <button className="text-[#2d7250] text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <MdLocalGroceryStore className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">Grocery</h1>
          <p className="my-4 mx-6 text-slate-700">
            Now get your Groceries with guaranteed Cashbacks.
          </p>
          <button className="text-[#2d7250] text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
      </div>
      <div className="serviceBox flex flex-col lg:flex-row w-[80vw] mx-auto">
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <FaComputer className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">CSC Center</h1>
          <p className="my-4 mx-6 text-slate-700">
            Get your Documents made in a Snap Through our Government Authorised
            CSC Center.
          </p>
          <button className="text-[#2d7250]  text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <BiSolidInjection className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">Health Checkup</h1>
          <p className="my-4 mx-6 text-slate-700">
            We Provide a wide Range of Blood and other Body tests at your
            doorsteps.
          </p>
          <button className="text-[#2d7250] text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
        <div className="hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-1/3">
          <FaCar className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
          <h1 className="text-[24px] my-4 mx-6">Tours And Travels</h1>
          <p className="my-4 mx-6 text-slate-700">
            Book Cars at Cheapest Rates in Town.
          </p>
          <button className="text-[#2d7250] text-sm mx-6 mb-4 font-extralight">
            MORE &#10097;
          </button>
        </div>
      </div>
      <div className="serviceBox flex flex-col lg:flex-row w-[80vw] mx-auto">
        <div className="flex hover:bg-slate-100  hover:border-t-4 hover:border-t-[#2d7250] border border-slate-300 w-[100%]">
          <div className="">
            <MdElectricCar className="text-[#2d7250] text-[70px] mt-6 mb-4 mx-6" />
            <h1 className="text-[24px] my-4 mx-6">Motors</h1>
            <p className="my-4 mx-6 text-slate-700 w-[80%]">
              We are Bringing A Wide Range Of Electric Vehicles.
            </p>
            <button className="text-[#2d7250] text-sm mx-6 mb-4 font-extralight">
              MORE &#10097;
            </button>
          </div>
          <div>
            <h1 className="text-[#2d7250] text-[85px] font-semibold mt-20 ml-10">
              COMING SOON!!!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
