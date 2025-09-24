import { TagCheckbox } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";

function Drinks({coffee, updateCoffeeData}) {
    return (
        <InfoParagraph>
                      drinks:
                      <span className="flex gap-2 flex-wrap w-[70%] justify-end">
                        <TagCheckbox
                          label="espresso"
                          checked={coffee.coffeeDrink?.includes("espresso_drink")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "espresso_drink";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="doppio"
                          checked={coffee.coffeeDrink?.includes("doppio")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "doppio";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="lungo"
                          checked={coffee.coffeeDrink?.includes("lungo")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "lungo";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="long coffee"
                          checked={coffee.coffeeDrink?.includes("long")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "long";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="americano"
                          checked={coffee.coffeeDrink?.includes("americano")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "americano";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="filter"
                          checked={coffee.coffeeDrink?.includes("filter_drink")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "filter_drink";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="black coffee"
                          checked={coffee.coffeeDrink?.includes("black_coffee")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "black_coffee";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="affogato"
                          checked={coffee.coffeeDrink?.includes("affogato")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "affogato";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="cappuccino"
                          checked={coffee.coffeeDrink?.includes("cappuccino")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "cappuccino";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="flat white"
                          checked={coffee.coffeeDrink?.includes("flat_white")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "flat_white";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="latte"
                          checked={coffee.coffeeDrink?.includes("latte")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "latte";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="mocha"
                          checked={coffee.coffeeDrink?.includes("mocha")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "mocha";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="iced coffee"
                          checked={coffee.coffeeDrink?.includes("iced_coffee")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "iced_coffee";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="cold brew"
                          checked={coffee.coffeeDrink?.includes("cold_brew_drink")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "cold_brew_drink";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="espresso tonic"
                          checked={coffee.coffeeDrink?.includes("espresso_tonic")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "espresso_tonic";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                        <TagCheckbox
                          label="turkish"
                          checked={coffee.coffeeDrink?.includes("turkish_drink")}
                          onChange={(e) => {
                            const selected = coffee.coffeeDrink || [];
                            const value = "turkish_drink";
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeDrink", updated);
                          }}
                        />
                      </span>
                    </InfoParagraph>
    )
}

export default Drinks
