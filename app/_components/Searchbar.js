import { CiSearch } from "react-icons/ci";
function Searchbar({ value, setValue, placeholder }) {
  return (
    <div className="relative">
      <input value={value} setValue={setValue} placeholder={placeholder} className="p-1 rounded-full text-2xl px-2 text-primary-950 border-none outline-none w-[25rem]"/>
      <CiSearch className="absolute right-2 top-2 text-primary-400 rounded-full text-2xl" />
    </div>
  );
}

export default Searchbar;
