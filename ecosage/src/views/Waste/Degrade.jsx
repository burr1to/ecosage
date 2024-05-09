/* eslint-disable no-unused-vars */
import Checkbox from "../../components/Checkbox";
import { useState } from "react";

export default function Degrade() {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
  };
  return (
    <div>
      <div>What type of bio-degradable waste comes from your house? </div>
      <br />
      <div className='flex flex-col justify-start items-center'>
        <Checkbox name='Fruit and Vegetable Peels' />
        <Checkbox name='Paper Scraps' />
        <Checkbox name='Meat, Fish and Dairy Products' />
        <Checkbox name='Pet Waste' />
        <Checkbox name='Yard Waste' />
        <div>
          <button onClick={() => {}}>Submit</button>
        </div>
      </div>
    </div>
  );
}
