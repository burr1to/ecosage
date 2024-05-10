// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../static/home.css";
import hills from "../../assets/Images/sus.png";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Dhulikhel&units=imperial&appid=039ec0be18d70e623d267f79e4a78dc9"
        );

        setData(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <div className='flex flex-col items-center justify-center mt-40 relative'>
        <div>
          <p className='text-[--primary] text-[24px]'>
            Learn more about the environment with EcoSage
          </p>
        </div>
        <br />
        <div>
          <h1 className='text-[--primary]'>
            Illuminating a sustainable future with the help of AI
          </h1>
        </div>
        <div className='grid grid-cols-1 gap-3 mt-12'>
          <div>
            <Link to='/explore/donate'>
              <button className='border border-[--primary] rounded-lg py-2 px-5 hover:bg-[--secondary] hover:text-white text-[20px] z-1 hover:transition-all'>
                Join us for a cause
              </button>
            </Link>
          </div>
        </div>

        <img src={hills} className='w-auto opacity-20 absolute z-[-99]' />
      </div>
      <div className='flex flex-col gap-x-7 justify-center items-center'>
        <br />
        <p className='text-center text-[32px] text-[--secondary] my-3 font-semibold text-wrap mt-[20px]'>
          Weather Report
        </p>
        <div className='my-2 p-4 border border-black bg-black opacity-45 rounded-[20px] text-white'>
          <div className=' m-auto p-3 '>
            <div className='flex flex-col justify-center items-center '>
              <div className='location'>
                <p className='font-medium text-[20px]'>{data.name}</p>
              </div>
              <div className='temp'>
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className='font-semibold text-[19px]'>
                {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>
            </div>
          </div>

          {data.name !== undefined && (
            <div className='flex justify-center items-center gap-x-10 text-[20px]  p-2'>
              <div className='flex flex-col justify-center items-center'>
                <p>Feels Like</p>
                {data.main ? (
                  <p className='font-bold'>
                    {data.main.feels_like.toFixed()}°F
                  </p>
                ) : null}
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p>Humidity</p>
                {data.main ? (
                  <p className='font-bold'>{data.main.humidity}%</p>
                ) : null}
              </div>
              <div className='flex flex-col justify-center items-center'>
                <p>Wind Speed</p>
                {data.wind ? (
                  <p className='font-bold'>{data.wind.speed.toFixed()} MPH</p>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Homepage;
