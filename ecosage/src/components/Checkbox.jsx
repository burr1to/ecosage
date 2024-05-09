/* eslint-disable react/prop-types */
export default function Checkbox({ name }) {
  return (
    <div>
      <input type='checkbox' value={name} />
      {name}
    </div>
  );
}
