import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import hills from "../../assets/Images/sus.png";
export default function WasteMan() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center mt-32 relative'>
        <div className='text-center'>
          <p className='text-[19px] text-[--secondary]'>
            Make it easier to learn about
          </p>
          <h1 className='text-[62px] px-20 py-2 font-semibold text-[--primary]'>
            Waste Management
          </h1>

          <p className='text-[21px] italic font-regular'>
            Use EcoSage to know about what you can do with the waste that is
            produced from your house everyday.
          </p>
        </div>
        <br></br>
        <div className='grid grid-cols-2 text-[38px] px-20 py-10 gap-x-10 opacity-85'>
          <Link to='bio'>
            <div className='p-20  bg-[--secondary] text-white hover:bg-[--primary] rounded-lg text-center hover:transition-all'>
              Biodegradable Waste
            </div>
          </Link>
          <Link to='nonbio'>
            <div className='p-20 bg-[--secondary] text-white rounded-lg text-center hover:bg-[--primary] hover:transition-all'>
              Non-Biodegradable Waste
            </div>
          </Link>
        </div>

        <img src={hills} className='absolute z-[-99] opacity-30' />
      </div>
    </>
  );
}
