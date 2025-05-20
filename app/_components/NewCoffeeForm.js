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
import { useState } from "react";
import { resizeImage } from "../_helpers/resizeImage";
import TasteInput from "./TasteInput";
import { useRouter } from "next/navigation";

function NewCoffeeForm() {
  const router = useRouter();
  const { coffee, resetNewCoffeeData, updateCoffeeData } = useNewCoffee();
  const [imagePreview, setImagePreview] = useState(
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd"
  );

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const resizedBlob = await resizeImage(file, 800, 1, 0.9); // square ratio
      updateCoffeeData("image", resizedBlob);

      const previewUrl = URL.createObjectURL(resizedBlob);
      setImagePreview(previewUrl);
    } catch (error) {
      console.error("Image resizing failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
      console.log("[handleSubmit] Submitting coffee:", coffee);
      await addCoffee(coffee, router); // make sure coffee.image is the File object
      console.log("Coffee added successfully");
    } catch (error) {
      console.error("Failed to add coffee:", error);
    }
  };

  return (
    <form className="mt-[110px] md:mt-[80px] flex w-full flex-col m-auto p-2 max-w-[1000px]">
      <div className="relative w-full flex flex-col m-auto">
        {/* <AddCoffeeButton /> */}
        <Link
          href="/coffees"
          className="z-10 bg-primary-200 hover:bg-primary-300 md:w-[50px] md:h-[50px] w-[35px] h-[35px] flex rounded-full fixed left-3 md:top-[90px] top-[95px] items-center justify-center"
        >
          <IoMdArrowRoundBack className="text-[1.6rem]" />
        </Link>
        <div className="max-w-[1000px] text-center text-primary-950 uppercase md:text-[3rem] md:flex-row flex-col text-[2rem] font-thin relative m-auto flex gap-2 justify-center">
          <input
            className="rounded-[1rem] px-4 py-0 uppercase text-center md:text-right w-[100%]"
            placeholder="roastery name"
            value={coffee.roasteryName}
            onChange={(e) => updateCoffeeData("roasteryName", e.target.value)}
          ></input>
          <input
            className=" rounded-[1rem] px-4 py-0 text-center md:text-left uppercase font-medium w-[100%]"
            placeholder="coffee name"
            value={coffee.coffeeName}
            onChange={(e) => updateCoffeeData("coffeeName", e.target.value)}
          ></input>
        </div>
        <textarea
          className="w-full h-[150px] mt-2 m-auto rounded-[1rem] p-2 text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin "
          placeholder="„Add short description”"
          value={coffee.description}
          onChange={(e) => updateCoffeeData("description", e.target.value)}
        ></textarea>

        <div className=" w-full h-auto grid grid-cols-1 m-auto mt-2 rounded-[1rem] overflow-hidden">
          <div className="h-[550px] md:h-auto w-[100%] bg-gradient-1 relative p-10 overflow-hidden flex flex-col justify-center items-center">
            {coffee.caffeine && (
              <Tag
                color={coffee.caffeine}
                text={coffee.caffeine}
                addClass="absolute md:right-[75px] md:bottom-[65px] right-[55px] bottom-[120px]"
              />
            )}
            <Image
              src={imagePreview}
              alt={coffee.coffeeName ? coffee.coffeeName : "name"}
              width="400"
              height="400"
              className="object-cover rounded-full p-2 bg-primary-50"
            />
            <ImageInput onChange={(e) => handleImageChange(e)} addClass="m-[-20px]" />
          </div>
          <div className="px-1 py-2 justify-start bg-gradient-2 h-auto w-[100%] flex flex-col">
            <InfoParagraph>
              rating (1 - 10):{" "}
              <Input
                type="number"
                min="0"
                max="10"
                label="higher is better"
                value={coffee.rating}
                onChange={(e) => updateCoffeeData("rating", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              origin: <CountrySelector />
            </InfoParagraph>
            <InfoParagraph>
              taste:
              <TasteInput />
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
              <Input
                label="elevation top"
                type="number"
                min="0"
                max="9000"
                value={coffee.elevation.top}
                onChange={(e) => updateCoffeeData("elevation.top", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph>
              <span></span>
              <Input
                label="elevation bottom"
                type="number"
                min="0"
                max="9000"
                value={coffee.elevation.bottom}
                onChange={(e) => updateCoffeeData("elevation.bottom", e.target.value)}
              />
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
                  label="moka"
                  checked={coffee.coffeeType?.includes("moka")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "moka";
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
                type="number"
                min="0"
                max="5"
                label="higher is darker"
                value={coffee.roast}
                onChange={(e) => updateCoffeeData("roast", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              intensity (1 - 5):
              <Input
                type="number"
                min="0"
                max="5"
                label="higher more intensive"
                value={coffee.intensity}
                onChange={(e) => updateCoffeeData("intensity", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph>
              acidity (1 - 5):
              <Input
                type="number"
                min="0"
                max="5"
                label="higher more acidic"
                value={coffee.acidity}
                onChange={(e) => updateCoffeeData("acidity", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              Machine dose level:
              <Input
                type="number"
                min="0"
                max="40"
                label="1 - 40"
                value={coffee.doseLevel}
                onChange={(e) => updateCoffeeData("doseLevel", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="light">
              weight:
              <Input
                label="8g"
                type="number"
                min="0"
                max="50"
                value={coffee.weightSmall}
                onChange={(e) => updateCoffeeData("weightSmall", e.target.value)}
                className="w-[50%]"
              />
            </InfoParagraph>
            <InfoParagraph>
              <span/>
              <Input
                label="13g"
                type="number"
                min="0"
                max="50"
                value={coffee.weightMedium}
                onChange={(e) => updateCoffeeData("weightMedium", e.target.value)}
                className="w-[50%]"
              />
            </InfoParagraph>
            <InfoParagraph>
              <span/>
              <Input
                label="18g"
                type="number"
                min="0"
                max="50"
                value={coffee.weightLarge}
                onChange={(e) => updateCoffeeData("weightLarge", e.target.value)}
                className="w-[50%]"
              />
            </InfoParagraph>

            <InfoParagraph color="dark">
              grind size - grinder:
              
                <Input
                  type="number"
                  min="0"
                  max="50"
                  label="espresso"
                  value={coffee.grindEspresso}
                  onChange={(e) => updateCoffeeData("grindEspresso", e.target.value)}
                  className="w-[50%]"
                />
                  </InfoParagraph>
                  <InfoParagraph color="dark">
                    <span/>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  label="filter"
                  value={coffee.grindFilter}
                  onChange={(e) => updateCoffeeData("grindFilter", e.target.value)}
                  className="w-[50%]"
                  
                  />
                  </InfoParagraph>
                  <InfoParagraph color="dark">
                    <span/>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  label="mokka"
                  value={coffee.grindMoka}
                  onChange={(e) => updateCoffeeData("grindMoka", e.target.value)}
                  className="w-[50%]"
                  
                  />
                  </InfoParagraph>
              
            <InfoParagraph color="light">
              grind size - machine:
              <Input
                type="number"
                min="0"
                max="7"
                label="1 - 7"
                value={coffee.grindMachine}
                onChange={(e) => updateCoffeeData("grindMachine", e.target.value)}
              />
            </InfoParagraph>
          </div>

          <div className="relative h-[400px]  w-[100%] p-10 bg-gradient-4 rounded-b-full overflow-hidden">
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
          onClick={handleSubmit}
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
