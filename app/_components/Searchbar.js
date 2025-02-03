import { CiSearch } from "react-icons/ci";
function Searchbar({ value, setValue, placeholder }) {
  return (
    <div className="relative">
      <input value={value} setValue={setValue} placeholder={placeholder} className="p-2 rounded-full font-thin text-xl text-primary-950 border-none outline-none md:w-[25rem] w-[90vw] m-auto"/>
      <CiSearch className="absolute right-3 top-2.5 text-primary-400 rounded-full text-2xl" />
    </div>
  );
}

export default Searchbar;
