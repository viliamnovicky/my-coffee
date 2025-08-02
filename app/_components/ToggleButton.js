import { MdDone } from "react-icons/md";
import { MdDoNotDisturbAlt } from "react-icons/md";



function ToggleButton({ checked, onChange, id = "toggle" }) {
  return (
    <label htmlFor={id} className="cursor-pointer relative inline-block w-14 h-8">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="opacity-0 w-0 h-0 peer"
      />
      <span
        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-primary-50 rounded-full transition-colors duration-300 peer-checked:bg-primary-100 peer-ring-primary-200 peer-focus:ring-primary-200"
      ></span>
      <span
        className="cursor-pointer absolute flex items-center justify-center text-primary-50 left-1 bottom-1 w-6 h-6 bg-primary-400 peer-checked:bg-primary-500 rounded-full transition-transform duration-300 peer-checked:translate-x-6"
      >{checked ? <MdDone /> : <MdDoNotDisturbAlt />}</span>
    </label>

  );
}

export default ToggleButton;
