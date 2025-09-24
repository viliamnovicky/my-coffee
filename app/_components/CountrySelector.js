import { useState } from "react";
import { useNewCoffee } from "../_context/NewCoffeeContext";
import Tag from "./Tag"; // for displaying tags
import countries from "../../public/data/countries"; // a static country list (you can import one)

export default function CountrySelector() {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const { coffee, updateCoffeeData, setNewCoffeeData } = useNewCoffee();

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    setFiltered(
      countries.filter(
        (c) => c.name.toLowerCase().startsWith(val.toLowerCase()) && !coffee.origin.includes(c.name)
      )
    );
  };

  const addOrigin = (country) => {
    updateCoffeeData("origin", [...coffee.origin, country]);
    setInputValue("");
    setFiltered([]);
  };

  const removeOrigin = (countryToRemove) => {
    updateCoffeeData(
      "origin",
      coffee.origin.filter((c) => c !== countryToRemove)
    );
  };

  return (
    <div className="flex flex-col justify-center items-end">
      <div className="relative flex flex-col jusify-center w-full items-end">
        <input
          className="rounded-md text-center border-none outline-none focus:border-none w-[20ch]"
          placeholder="Add origin country..."
          value={inputValue}
          onChange={handleInputChange}
        />

        {filtered.length > 0 && (
          <ul className="bg-white border rounded max-h-40 overflow-auto z-10 absolute mt-7 right-0 w-[20ch]">
            {filtered.map((country) => (
              <li
                key={country.name}
                className="p-2 hover:bg-primary-100 cursor-pointer text-center"
                onClick={() => addOrigin(country.name)}
              >
                <div className="font-semibold">{country.name}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {coffee.origin.map((country) => (
          <Tag
            key={country}
            text={country}
            color="country"
            addClass="cursor-pointer"
            onClick={() => removeOrigin(country)}
          />
        ))}
      </div>
    </div>
  );
}
