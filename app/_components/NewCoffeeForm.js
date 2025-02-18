"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { InfoParagraph, StatParagraph } from "./Paragraphs";
import Tag from "./Tag";
import { AddCoffeeButton } from "./Buttons";
import Link from "next/link";
import Image from "next/image";

import { useNewCoffee } from "../_context/NewCoffeeContext";
import { ImageInput, Input, Select, TagCheckbox } from "../_components/Inputs";

function NewCoffeeForm() {
  const { coffee, resetNewCoffeeData, updateCoffeeData } = useNewCoffee();
  
  function handleImageChange(file) {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateCoffeeData("image", imageUrl);
    }
    console.log(coffee.image)
  };

  return (
    <div className="relative w-[100vw] flex flex-col">
      <AddCoffeeButton />
      <Link
        href="/coffees"
        className=" bg-primary-200 hover:bg-primary-300 w-[50px] h-[50px] flex rounded-full absolute left-3 top-3 items-center justify-center "
      >
        <IoMdArrowRoundBack className="text-[1.6rem]" />
      </Link>
      <form className="flex w-full flex-col m-auto max-w-[1366px] p-2">
        <div className="text-center text-primary-950 uppercase md:text-[3rem] text-[2rem] font-thin relative m-auto flex gap-2 justify-center w-[100%]">
          <input
            className="rounded-full px-4 py-0 uppercase text-right w-[100%]"
            placeholder="roastery name"
            value={coffee.roasteryName}
            onChange={(e) => updateCoffeeData("roasteryName", e.target.value)}
          ></input>
          <input
            className=" rounded-full px-4 py-0 uppercase font-medium w-[100%]"
            placeholder="coffee name"
            value={coffee.coffeeName}
            onChange={(e) => updateCoffeeData("coffeeName", e.target.value)}
          ></input>
        </div>
        <textarea
          className="w-[100%] h-[150px] mt-2 m-auto rounded-[25px] p-2 text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin "
          placeholder="„Add short description”"
          value={coffee.description}
          onChange={(e) => updateCoffeeData("description", e.target.value)}
        ></textarea>
      </form>
      <div className=" w-[100vw] h-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] m-auto p-4">
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
            alt={coffee.coffeeName}
            width="400"
            height="400"
            className="object-cover rounded-full p-2 bg-primary-50"
          />
          <ImageInput onImageSelect={handleImageChange} addClass="m-[-20px]"/>
        </div>
        <div className=" px-1 py-2 justify-start bg-gradient-2 h-auto w-[100%] flex flex-col">
          <InfoParagraph>
            rating (1 - 10): <Input placeholder="higher is better" />
          </InfoParagraph>
          <InfoParagraph color="dark">
            origin:
            <Input placeholder='separate by ","' />
          </InfoParagraph>
          <InfoParagraph>
            taste:
            <Input placeholder='separate by ","' addClass=""></Input>
          </InfoParagraph>
          <InfoParagraph color="dark">
            beans:
            <Select>
              <option value="arabica">arabica</option>
              <option value="robusta">robusta</option>
              <option value="blend">blend</option>
            </Select>
          </InfoParagraph>
          <InfoParagraph color="light">
            elevation:
            <span className="flex gap-2 w-[20ch]">
              <Input type="number" placeholder="*top" addClass="w-[50%]"></Input>
              <Input type="number" placeholder="bottom" addClass="w-[50%]"></Input>
            </span>
          </InfoParagraph>
          <InfoParagraph color="dark">
            type:
            <span className="flex gap-2 flex-wrap w-[70%] justify-end">
              <TagCheckbox label="filter"/>
              <TagCheckbox label="espresso"/>
              <TagCheckbox label="frenchpress"/>
              <TagCheckbox label="stovetop"/>
              <TagCheckbox label="automat"/>
              <TagCheckbox label="turkish"/>
              </span>
          </InfoParagraph>
        </div>
        <div
          className={`${
            coffee.origin && "pb-[65px]"
          } relative bg-gradient-3 h-auto w-[100%] flex flex-col px-1 py-2 justify-start`}
        >
          <InfoParagraph>
            roast (1 - 5):
            <Input placeholder="higher is darker" />
          </InfoParagraph>
          <InfoParagraph color="dark">
            intensity (1 - 5):
            <Input placeholder="higher more intensive" />
          </InfoParagraph>
          <InfoParagraph>
            acidity (1 - 5):
            <Input placeholder="higher more acidic" />
          </InfoParagraph>
          <InfoParagraph color="dark">
            Machine dose level:
            <Input placeholder="1 - 40" />
          </InfoParagraph>
          <InfoParagraph color="light">
            weight:
            <span className="flex gap-2 w-[20ch]">
              <Input placeholder="single" addClass="w-[50%]" />
              <Input placeholder="double" addClass="w-[50%]" />
            </span>
          </InfoParagraph>

          <InfoParagraph color="dark">
            grind size - grinder:
            <span className="flex gap-2 w-[20ch]">
              <Input placeholder="espresso" addClass="w-[50%]" />
              <Input placeholder="filter" addClass="w-[50%]" />
            </span>
          </InfoParagraph>
          <InfoParagraph color="light">
            grind size - machine:
            <Input placeholder="1 - 7" />
          </InfoParagraph>
          {coffee?.origin && (
            <div>
              <Image
                src={`/maps/${coffee.origin[1]}.svg`}
                fill
                className="object-cover opacity-20"
                alt="coffe-rigin-country"
              />
            </div>
          )}
        </div>
        <div className="relative h-[400px] md:h-auto w-[100%] p-10 bg-gradient-4 rounded-b-full md:rounded-bl-none md:rounded-r-full overflow-hidden">
          {coffee.origin && (
            <Image
              src={`/maps/${coffee.origin[0]}.svg`}
              fill
              className="object-cover opacity-30"
              alt="coffe-rigin-country"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewCoffeeForm;
