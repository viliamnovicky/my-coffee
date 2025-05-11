"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { InfoParagraph, StatParagraph } from "./Paragraphs";
import Tag from "./Tag";
import { AddCoffeeButton } from "./Buttons";
import { GiCoffeeBeans } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";

import { useNewCoffee } from "../_context/NewCoffeeContext";
import { ImageInput, Input, Select, TagCheckbox } from "../_components/Inputs";
import { addCoffee } from "../_lib/data-service";
import CountrySelector from "./CountrySelector";

function NewCoffeeForm() {
  const { coffee, resetNewCoffeeData, updateCoffeeData } = useNewCoffee();

  function handleImageChange(file) {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateCoffeeData("image", imageUrl);
    }
    console.log(coffee.image);
  }

  return (
    <form className="mt-[70px] md:mt-0 flex w-full flex-col m-auto p-2">
      <div className="relative w-full flex flex-col m-auto">
        {/* <AddCoffeeButton /> */}
        <Link
          href="/coffees"
          className=" bg-primary-200 hover:bg-primary-300 w-[50px] h-[50px] flex rounded-full absolute left-3 top-3 items-center justify-center "
        >
          <IoMdArrowRoundBack className="text-[1.6rem]" />
        </Link>
        <div className="text-center text-primary-950 uppercase md:text-[3rem] md:flex-row flex-col text-[2rem] font-thin relative m-auto flex gap-2 justify-center w-[full] md:w-[1340px]">
          <input
            className="rounded-full px-4 py-0 uppercase text-center md:text-right w-[100%]"
            placeholder="roastery name"
            value={coffee.roasteryName}
            onChange={(e) => updateCoffeeData("roasteryName", e.target.value)}
          ></input>
          <input
            className=" rounded-full px-4 py-0 text-center md:text-left uppercase font-medium w-[100%]"
            placeholder="coffee name"
            value={coffee.coffeeName}
            onChange={(e) => updateCoffeeData("coffeeName", e.target.value)}
          ></input>
        </div>
        <textarea
          className="w-full md:w-[1340px] h-[150px] mt-2 m-auto rounded-[25px] p-2 text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin "
          placeholder="„Add short description”"
          value={coffee.description}
          onChange={(e) => updateCoffeeData("description", e.target.value)}
        ></textarea>

        <div className=" w-full px-4 h-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] m-auto mt-2">
          <div className="h-[550px] md:h-auto w-[100%] bg-gradient-1 rounded-t-full rounded-lt-none md:rounded-l-full md:rounded-r-none relative p-10 overflow-hidden flex flex-col justify-center items-center">
            {coffee.caffeine && (
              <Tag
                color={coffee.caffeine}
                text={coffee.caffeine}
                addClass="absolute md:right-[75px] md:bottom-[65px] right-[55px] bottom-[120px]"
              />
            )}
            <Image
              src={coffee.image}
              alt={coffee.coffeeName ? coffee.coffeeName : "name"}
              width="400"
              height="400"
              className="object-cover rounded-full p-2 bg-primary-50"
            />
            <ImageInput onImageSelect={handleImageChange} addClass="m-[-20px]" />
          </div>
          <div className="px-1 py-2 justify-start bg-gradient-2 h-auto w-[100%] flex flex-col">
            <InfoParagraph>
              rating (1 - 10):{" "}
              <Input
                placeholder="higher is better"
                value={coffee.rating}
                onChange={(e) => updateCoffeeData("rating", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              origin: <CountrySelector />
            </InfoParagraph>
            <InfoParagraph>
              taste:
              <Input
                placeholder='separate by ","'
                value={coffee.taste}
                onChange={(e) => updateCoffeeData("taste", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              beans:
              <Select
                value={coffee.beanType}
                onChange={(e) => updateCoffeeData("beanType", e.target.value)}
              >
                <option value="">select</option>
                <option value="arabica">arabica</option>
                <option value="robusta">robusta</option>
                <option value="blend">blend</option>
              </Select>
            </InfoParagraph>
            <InfoParagraph color="light">
              elevation:
              <span className="flex flex-col gap-2 w-[20ch]">
                <Input
                  placeholder="elevation top"
                  type="number"
                  value={coffee.elevation.top}
                  onChange={(e) => updateCoffeeData("elevation.top", e.target.value)}
                />
                <Input
                  placeholder="elevation bottom"
                  type="number"
                  value={coffee.elevation.bottom}
                  onChange={(e) => updateCoffeeData("elevation.bottom", e.target.value)}
                />
              </span>
            </InfoParagraph>
            <InfoParagraph color="dark">
              type:
              <span className="flex gap-2 flex-wrap w-[70%] justify-end">
                <TagCheckbox
                  label="filter"
                  checked={coffee.coffeeType?.includes("filter")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "filter";
                    console.log(value);
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
                <TagCheckbox
                  label="espresso"
                  checked={coffee.coffeeType?.includes("espresso")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "espresso";
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
                <TagCheckbox
                  label="frenchpress"
                  checked={coffee.coffeeType?.includes("frenchpress")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "frenchpress";
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
                <TagCheckbox
                  label="mokka"
                  checked={coffee.coffeeType?.includes("mokka")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "mokka";
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
                <TagCheckbox
                  label="automat"
                  checked={coffee.coffeeType?.includes("automat")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "automat";
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
                <TagCheckbox
                  label="turkish"
                  checked={coffee.coffeeType?.includes("turkish")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "turkish";
                    const updated = e.target.checked
                      ? [...selected, value]
                      : selected.filter((v) => v !== value);
                    updateCoffeeData("coffeeType", updated);
                  }}
                />
              </span>
            </InfoParagraph>
          </div>

          <div className="relative bg-gradient-3 h-auto w-[100%] flex flex-col px-1 py-2 justify-start">
            <InfoParagraph>
              roast (1 - 5):
              <Input
                placeholder="higher is darker"
                value={coffee.roast}
                onChange={(e) => updateCoffeeData("roast", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              intensity (1 - 5):
              <Input
                placeholder="higher more intensive"
                value={coffee.intensity}
                onChange={(e) => updateCoffeeData("intensity", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph>
              acidity (1 - 5):
              <Input
                placeholder="higher more acidic"
                value={coffee.acidity}
                onChange={(e) => updateCoffeeData("acidity", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              Machine dose level:
              <Input
                placeholder="1 - 40"
                value={coffee.doseLevel}
                onChange={(e) => updateCoffeeData("doseLevel", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="light">
              weight:
              <span className="flex flex-col gap-2 w-[20ch]">
                <Input
                  placeholder="single"
                  value={coffee.weightSingle}
                  onChange={(e) => updateCoffeeData("weightSingle", e.target.value)}
                  className="w-[50%]"
                />
                <Input
                  placeholder="double"
                  value={coffee.weightDouble}
                  onChange={(e) => updateCoffeeData("weightDouble", e.target.value)}
                  className="w-[50%]"
                />
              </span>
            </InfoParagraph>
            <InfoParagraph color="dark">
              grind size - grinder:
              <span className="flex gap-2 flex-col w-[20ch]">
                <Input
                  placeholder="espresso"
                  value={coffee.grindMachine}
                  onChange={(e) => updateCoffeeData("grindMachine", e.target.value)}
                  className="w-[50%]"
                />
                <Input
                  placeholder="filter"
                  value={coffee.grindFilter}
                  onChange={(e) => updateCoffeeData("grindFilter", e.target.value)}
                  className="w-[50%]"
                />
              </span>
            </InfoParagraph>
            <InfoParagraph color="light">
              grind size - machine:
              <Input
                placeholder="1 - 7"
                value={coffee.grindManual}
                onChange={(e) => updateCoffeeData("grindManual", e.target.value)}
              />
            </InfoParagraph>
          </div>

          <div className="relative h-[400px] md:h-auto w-[100%] p-10 bg-gradient-4 rounded-b-full md:rounded-bl-none md:rounded-r-full overflow-hidden">
            {coffee.origin && (
              <Image
                src={`/maps/${coffee.origin}.svg`}
                fill
                className="object-cover opacity-30"
                alt="coffe-rigin-country"
              />
            )}
          </div>
        </div>
        <button
          onClick={() => addCoffee(coffee)}
          className="bg-primary-400 hover:bg-primary-500 z-10 px-4 py-2 uppercase rounded-md absolute md:bottom-0 bottom-[50px] left-[50%] translate-x-[-50%] md:border-none border border-primary-50"
        >
          <GiCoffeeBeans className="z-0 text-[80px] text-primary-600 absolute left-[50%] bottom-0  translate-x-[-50%]" />
          <span className="z-1 relative">save coffee</span>
        </button>
      </div>
    </form>
  );
}

export default NewCoffeeForm;
