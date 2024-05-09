import { Link } from "react-router-dom";

export default function WasteMan() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-[90px] px-20 py-2'>Waste Management</div>
      <br></br>
      <div className='grid grid-cols-2 text-[40px] px-20 gap-x-10'>
        <Link to='bio'>
          <div className='p-20  border border-black rounded-lg'>
            Bio-Degradable Waste
          </div>
        </Link>
        <div className='p-20  border border-black rounded-lg'>
          Non Bio-Degradable Waste
        </div>
      </div>
    </div>
  );
}
