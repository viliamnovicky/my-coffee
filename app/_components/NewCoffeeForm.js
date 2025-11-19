"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { InfoParagraph } from "./Paragraphs";
import { GiCoffeeBeans } from "react-icons/gi";

import Link from "next/link";
import Image from "next/image";

import { useNewCoffee } from "../_context/NewCoffeeContext";
import { Input, Select } from "../_components/Inputs";
import { addNewCoffee, updateCoffee } from "../_lib/data-service";
import CountrySelector from "./CountrySelector";
import { Suspense, useEffect } from "react";
import TasteInput from "./TasteInput";
import { useRouter } from "next/navigation";
import GrindSettings from "./new-coffee-form/GrindSettings";
import Weight from "./new-coffee-form/Weight";
import ToggleButton from "./ToggleButton";
import Notes from "./new-coffee-form/Notes";
import Preps from "./new-coffee-form/Preps";
import Drinks from "./new-coffee-form/Drinks";
import Elevation from "./new-coffee-form/Elevation";
import Stats from "./new-coffee-form/Stats";
import Name from "./new-coffee-form/Name";
import Picture from "./new-coffee-form/Picture";
import LoadingCoffees from "./_spinners/LoadingCoffees";
import CustomSettings from "./new-coffee-form/CustomSettings";

function NewCoffeeForm({ user, update }) {
  const router = useRouter();
  const {
    coffee,
    resetNewCoffeeData,
    updateCoffeeData,
    syncGrindSettingsWithGrinders,
    syncCustomSettingsWithMakers,
  } = useNewCoffee();

  const coffeeBasic = {
    roasteryName: coffee.roasteryName,
    coffeeName: coffee.coffeeName,
    acidity: coffee.acidity,
    beanType: coffee.beanType,
    caffeine: coffee.caffeine,
    description: coffee.description,
    elevation: coffee.elevation,
    region: coffee.region,
    farm: coffee.farm,
    variety: coffee.variety,
    process: coffee.process,
    origin: coffee.origin,
    image: coffee.image,
    roast: coffee.roast,
    intensity: coffee.intensity,
    taste: coffee.taste,
    isBio: coffee.isBio,
    isClimaNeutral: coffee.isClimaNeutral,
    beansScore: coffee.beansScore,
  };

  useEffect(() => {
    if (user?.grinders?.length > 0) {
      syncCustomSettingsWithMakers(user.coffeeMakers);
    }
  }, [user?.makers]);

  useEffect(() => {
    if (
      user.grinders?.length > 0 &&
      Array.isArray(coffee.grindSettings) &&
      coffee.grindSettings.length === 0
    ) {
      syncGrindSettingsWithGrinders(user.grinders);
    }
  }, [user.grinders, coffee.grindSettings, syncGrindSettingsWithGrinders]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    try {
      if (update) {
        // ✅ update existing coffee
        await updateCoffee(coffee.slug, coffee, user.email, router);
      } else {
        // ✅ create new coffee
        await addNewCoffee(coffee, coffeeBasic, user.email, router);
      }
    } catch (error) {
      console.error("Failed to save coffee:", error);
    }
  };

  return (
    <form className="mt-[8vh] flex w-full flex-col m-auto p-2 max-w-[1000px]">
      <Suspense fallback={<LoadingCoffees />}>
        <div className="relative w-full flex flex-col m-auto">
          <Link
            href="/coffees"
            className="z-10 bg-primary-200 hover:bg-primary-300 xl:w-[50px] xl:h-[50px] w-[35px] h-[35px] flex rounded-full fixed left-3 xl:top-[90px] top-[95px] items-center justify-center"
          >
            <IoMdArrowRoundBack className="text-[1.6rem]" />
          </Link>
          <Name coffee={coffee} updateCoffeeData={updateCoffeeData} />

          <div className=" w-full h-auto grid grid-cols-1 m-auto mt-2 rounded-[1rem] overflow-hidden">
            <Picture update={update} coffee={coffee} updateData={updateCoffeeData} />
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
              <InfoParagraph>
                Beans score:
                <Input
                  type="number"
                  min="0"
                  max="100"
                  label="1 - 100"
                  value={coffee.beansScore}
                  onChange={(e) => updateCoffeeData("beansScore", e.target.value)}
                />
              </InfoParagraph>
              <InfoParagraph color="dark" className="xl:flex-row flex-col">
                <span className="flex items-center xl:justify-center justify-between gap-[2rem] w-full">
                  Bio quality:
                  <ToggleButton
                    id="isBio"
                    checked={coffee.isBio}
                    onChange={() => updateCoffeeData("isBio", !coffee.isBio)}
                  />
                </span>
                <span className="flex items-center xl:justify-center justify-between gap-[2rem] w-full">
                  Clima Neutral:
                  <ToggleButton
                    id="isClimaNeutral"
                    checked={coffee.isClimaNeutral}
                    onChange={() => updateCoffeeData("isClimaNeutral", !coffee.isClimaNeutral)}
                  />
                </span>
              </InfoParagraph>
              <InfoParagraph>
                taste:
                <TasteInput coffee={coffee} updateCoffeeData={updateCoffeeData} />
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
              <Elevation coffee={coffee} updateCoffeeData={updateCoffeeData} />
              <Stats coffee={coffee} updateCoffeeData={updateCoffeeData} />
              <Preps coffee={coffee} updateCoffeeData={updateCoffeeData} />
              <Drinks coffee={coffee} updateCoffeeData={updateCoffeeData} />
            </div>
            <div className="relative bg-gradient-3 h-auto w-[100%] flex flex-col xl:px-1 py-2 justify-start">
              <GrindSettings user={user} coffee={coffee} updateCoffeeData={updateCoffeeData} />
              <CustomSettings coffee={coffee} user={user} updateCoffeeData={updateCoffeeData} />
              <Weight coffee={coffee} user={user} updateCoffeeData={updateCoffeeData} />
              <Notes coffee={coffee} user={user} updateCoffeeData={updateCoffeeData} />
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
      </Suspense>
    </form>
  );
}

export default NewCoffeeForm;
