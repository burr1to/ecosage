import Navbar from "../../components/Navbar";
import "../../static/explore.css";
import wm from "../../assets/Images/wm.jpg";
import ef from "../../assets/Images/ef.jpg";
import diy from "../../assets/Images/diy.jpg";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <>
      <Navbar />

      <div className='my-16'>
        <div className='text-center text-[40px] tracking-wider mb-8'>
          Explore
        </div>
        <p className='text-center text-[24px] font-semibold'>
          EcoSage serves as a platform for layman users to be more aware about
          the environment. We hope to make efforts towards giving knowledge
          abour sustainibility to novice people through the use of AI.
        </p>
      </div>
      <div className='grid grid-cols-3 mt-100 gap-x-32'>
        <Link to='/explore/waste'>
          <div className='card card1' style={{ backgroundImage: `url(${wm})` }}>
            <div className='card-content'>
              <p>Waste Management</p>
            </div>
          </div>
        </Link>
        <Link to='/explore/donate'>
          <div className='card card2' style={{ backgroundImage: `url(${ef})` }}>
            <div className='card-content'>
              <p>Fundraisers</p>
            </div>
          </div>
        </Link>
        <Link to='/explore/DIY'>
          <div
            className='card card3'
            style={{ backgroundImage: `url(${diy})` }}
          >
            <div className='card-content'>
              <p>Do It Yourself</p>
            </div>
          </div>
        </Link>
        <div></div>
      </div>
    </>
  );
}
