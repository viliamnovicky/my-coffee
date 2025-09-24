function Name({coffee, updateCoffeeData}) {
    return (
        <>
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
        </>
    )
}

export default Name
