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
import { useEffect, useState } from "react";
import { resizeImage } from "../_helpers/resizeImage";
import TasteInput from "./TasteInput";
import { useRouter } from "next/navigation";
import GrindSettings from "./new-coffee-form/GrindSettings";
import DoseLevel from "./new-coffee-form/DoseLevel";
import Weight from "./new-coffee-form/Weight";
import ToggleButton from "./ToggleButton";
import Notes from "./new-coffee-form/Notes";

function NewCoffeeForm({ user }) {
  const router = useRouter();
  const { coffee, resetNewCoffeeData, updateCoffeeData, syncGrindSettingsWithGrinders } =
    useNewCoffee();
  const [imagePreview, setImagePreview] = useState(
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd"
  );

  useEffect(() => {
    if (user.grinders?.length > 0 && Object.keys(coffee.grindSettings).length === 0) {
      syncGrindSettingsWithGrinders(user.grinders);
    }
  }, [user.grinders, coffee.grindSettings, syncGrindSettingsWithGrinders]);

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
      await addCoffee(coffee, user.email, router); // make sure coffee.image is the File object
      console.log("Coffee added successfully");
    } catch (error) {
      console.error("Failed to add coffee:", error);
    }
  };

  return (
    <form className="mt-[110px] xl:mt-[80px] flex w-full flex-col m-auto p-2 max-w-[1000px]">
      <div className="relative w-full flex flex-col m-auto">
        {/* <AddCoffeeButton /> */}
        <Link
          href="/coffees"
          className="z-10 bg-primary-200 hover:bg-primary-300 xl:w-[50px] xl:h-[50px] w-[35px] h-[35px] flex rounded-full fixed left-3 xl:top-[90px] top-[95px] items-center justify-center"
        >
          <IoMdArrowRoundBack className="text-[1.6rem]" />
        </Link>
        <div className="max-w-[1000px] text-center text-primary-950 uppercase xl:text-[3rem] xl:flex-row flex-col text-[2rem] font-thin relative m-auto flex gap-2 justify-center">
          <input
            className="rounded-[1rem] px-4 py-0 uppercase text-center xl:text-right w-[100%]"
            placeholder="roastery name"
            value={coffee.roasteryName}
            onChange={(e) => updateCoffeeData("roasteryName", e.target.value)}
          ></input>
          <input
            className=" rounded-[1rem] px-4 py-0 text-center xl:text-left uppercase font-medium w-[100%]"
            placeholder="coffee name"
            value={coffee.coffeeName}
            onChange={(e) => updateCoffeeData("coffeeName", e.target.value)}
          ></input>
        </div>
        <textarea
          className="w-full h-[150px] mt-2 m-auto rounded-[1rem] p-2 text-center text-primary-950 text-[1.5rem] xl:text-[2rem] italic font-thin "
          placeholder="„Add short description”"
          value={coffee.description}
          onChange={(e) => updateCoffeeData("description", e.target.value)}
        ></textarea>

        <div className=" w-full h-auto grid grid-cols-1 m-auto mt-2 rounded-[1rem] overflow-hidden">
          <div className="h-[550px] xl:h-auto w-[100%] bg-gradient-1 relative p-10 overflow-hidden flex flex-col justify-center items-center">
            {coffee.caffeine && (
              <Tag
                color={coffee.caffeine}
                text={coffee.caffeine}
                addClass="absolute xl:right-[75px] xl:bottom-[65px] right-[55px] bottom-[120px]"
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
          <div className="xl:px-1 py-2 justify-start bg-gradient-2 h-auto w-[100%] flex flex-col">
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
            <p className="uppercase text-center p-2 bg-primary-300">origin info</p>

            <InfoParagraph color="dark">
              origin: <CountrySelector />
            </InfoParagraph>
            <InfoParagraph>
              Region:
              <Input
                type="text"
                label=" "
                value={coffee.region}
                onChange={(e) => updateCoffeeData("region", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              farm:
              <Input
                type="text"
                label=" "
                value={coffee.farm}
                onChange={(e) => updateCoffeeData("farm", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph>
              variety:
              <Input
                type="text"
                label=" "
                value={coffee.variety}
                onChange={(e) => updateCoffeeData("variety", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              process:
              <Input
                type="text"
                label=" "
                value={coffee.process}
                onChange={(e) => updateCoffeeData("process", e.target.value)}
              />
            </InfoParagraph>
            <p className="uppercase text-center p-2 bg-primary-300">beans info</p>

            <InfoParagraph color="dark">
              Bio quality:
              <ToggleButton checked={coffee.isBio} onChange={() => updateCoffeeData("isBio", !coffee.isBio)} />
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
                <option value="arabica">arabica</option>
                <option value="robusta">robusta</option>
                <option value="blend">blend</option>
              </Select>
            </InfoParagraph>
            <InfoParagraph>
              caffeine:
              <Select
                value={coffee.caffeine}
                onChange={(e) => updateCoffeeData("caffeine", e.target.value)}
              >
                <option value="decaf">decaf</option>
                <option value="mild">mild</option>
                <option value="medium">medium</option>
                <option value="strong">strong</option>
              </Select>
            </InfoParagraph>
            <InfoParagraph color="dark">
              elevation:
              <Input
                label="elevation top"
                type="number"
                min="0"
                max="9000"
                value={coffee.elevation.top}
                placeholder="in meters"
                onChange={(e) => updateCoffeeData("elevation.top", e.target.value)}
              />
            </InfoParagraph>
            <InfoParagraph color="dark">
              <span></span>
              <Input
                label="elevation bottom"
                type="number"
                min="0"
                max="9000"
                value={coffee.elevation.bottom}
                placeholder="in meters"
                onChange={(e) => updateCoffeeData("elevation.bottom", e.target.value)}
              />
            </InfoParagraph>
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
              best for:
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
                  label="cold brew"
                  checked={coffee.coffeeType?.includes("cold-brew")}
                  onChange={(e) => {
                    const selected = coffee.coffeeType || [];
                    const value = "cold-brew";
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
                  label="moka pot"
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
          <div className="relative bg-gradient-3 h-auto w-[100%] flex flex-col xl:px-1 py-2 justify-start">
            <GrindSettings user={user} coffee={coffee} />
            <DoseLevel coffee={coffee} user={user} />
            <Weight coffee={coffee} user={user} />
            <p className="uppercase text-center p-2">Notes</p>
            <Notes coffee={coffee} user={user} />
          </div>

          <div className="relative h-[400px]  w-[100%] p-10 bg-gradient-4 rounded-b-full overflow-hidden">
            {coffee.origin[0] && (
              <Image
                src={`/maps/${coffee.origin[0]}.svg`}
                fill
                className="object-cover opacity-30"
                alt="coffe-rigin-country"
              />
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary-400 hover:bg-primary-500 z-10 px-4 py-2 uppercase rounded-md absolute xl:bottom-0 bottom-[50px] left-[50%] translate-x-[-50%] xl:border-none border border-primary-50"
        >
          <GiCoffeeBeans className="z-0 text-[80px] text-primary-600 absolute left-[50%] bottom-0  translate-x-[-50%]" />
          <span className="z-1 relative">save coffee</span>
        </button>
      </div>
    </form>
  );
}

export default NewCoffeeForm;
