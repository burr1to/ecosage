import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NonDegrade from "./views/Waste/NonDegrade";
import Explore from "./views/Explore/Explore";
import WasteMan from "./views/Waste/WasteMan";
import Degrade from "./views/Waste/Degrade";
import DIY from "./views/DIY/DIY";
export default function Routedpath() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='explore'>
          <Route index element={<Explore />} />
          <Route path='waste'>
            <Route index element={<WasteMan />} />
            <Route path='bio' element={<Degrade />} />
            <Route path='nonbio' element={<NonDegrade />} />
          </Route>
          <Route path='diy' element={<DIY />} />
        </Route>
      </Route>
    </Routes>
  );
}
