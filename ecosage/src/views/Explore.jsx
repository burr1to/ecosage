import Navbar from "../Components/Navbar";
import "../Css/Explore.css"
import wm from "../assets/Images/wm.jpg"
import ef from "../assets/Images/ef.jpg"
import diy from "../assets/Images/diy.jpg"
import { FcMoneyTransfer } from "react-icons/fc";

export default function Explore() {

    return (
        <>
            <Navbar />
            <div className="card-grid">
                <div className="card card1" style={{ backgroundImage: `url(${wm})` }}>
                    <div className="card-content">
                        <h1>Waste Management</h1>
                    </div>
                </div>
                <div className="card card2" style={{ backgroundImage: `url(${ef})` }}>
                    <div className="card-content">
                        <h1>Energy Efficiency</h1>
                    </div>
                </div>
                <div className="card card3" style={{ backgroundImage: `url(${diy})` }}>
                    <div className="card-content">
                        <h1>DIY</h1>
                    </div>
                </div>
            </div>
            <div className="button--donation">
                <button>
                    Donation <FcMoneyTransfer />
                </button>
            </div>
        </>
    )
}
