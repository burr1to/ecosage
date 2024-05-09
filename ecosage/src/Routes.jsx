import { Route, Routes } from "react-router-dom";
import Home from "./views/Homepage";
import Explore from "./views/Explore";
import Weather from "./views/Weather";
export default function Routedpath() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="explore" element={<Explore />} />
                <Route path="weather" element={<Weather />} />
            </Route>

        </Routes>
    );
}