import Navbar from "../../components/Navbar";
import "../../static/explore.css";
import tree from "../../assets/Images/tree.jpg";
import waste from "../../assets/Images/waste.jpg";
import sea from "../../assets/Images/sea.jpg";

export default function FundRaise() {
  return (
    <>
      <Navbar />
      <br />
      <div>
        <h1 className='text-center py-4'>Fundraisers</h1>
        <br />
        <p className='text-center py-8 text-[20px]'>
          Fundraisers for environmental programs are vital for supporting
          initiatives aimed at conserving and protecting the environment. These
          fundraisers can target a variety of environmental causes, including
          wildlife conservation, habitat restoration, climate change mitigation,
          pollution reduction, sustainable development, and environmental
          education. Here are some ideas for fundraisers specifically focused on
          environmental programs:
        </p>
      </div>
      <div className='grid grid-cols-3 gap-4 '>
        <div className='card card1' style={{ backgroundImage: `url(${tree})` }}>
          <div className='card-content'>
            <p>Seed to Tree Plantation Programmes</p>
          </div>
        </div>
        <div
          className='card card1'
          style={{ backgroundImage: `url(${waste})` }}
        >
          <div className='card-content'>
            <p>Waste Cleaning Programme</p>
          </div>
        </div>
        <div className='card card1' style={{ backgroundImage: `url(${sea})` }}>
          <div className='card-content'>
            <p>Clean the Sea Fundraising</p>
          </div>
        </div>
      </div>
    </>
  );
}
