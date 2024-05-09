import { Link } from "react-router-dom";

export default function WasteMan() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center'>
        <p className='text-[19px]'>Make it easier to learn about</p>
        <h1 className='text-[62px] px-20 py-2 font-semibold'>
          Waste Management
        </h1>

        <p className='text-[21px] italic font-regular mt-2'>
          Use EcoSage to know about what you can do with the waste that is
          produced from your house everyday.
        </p>
      </div>
      <br></br>
      <div className='grid grid-cols-2 text-[40px] px-20 py-10 gap-x-10'>
        <Link to='bio'>
          <div className='p-20  bg-slate-300 hover:bg-slate-200 rounded-lg text-center'>
            Biodegradable Waste
          </div>
        </Link>
        <Link to='nonbio'>
          <div className='p-20 bg-slate-200 rounded-lg text-center hover:bg-slate-300'>
            Non-Biodegradable Waste
          </div>
        </Link>
      </div>
    </div>
  );
}
