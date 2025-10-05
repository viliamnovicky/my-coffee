import { TagCheckbox } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";

function Preps({coffee, updateCoffeeData}) {
    return (
        <InfoParagraph color="dark">
                      preparations:
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
                          label="drip"
                          checked={coffee.coffeeType?.includes("drip")}
                          onChange={(e) => {
                            const selected = coffee.coffeeType || [];
                            const value = "drip";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeType", updated);
                          }}
                        />
                        <TagCheckbox
                          label="cold brew"
                          checked={coffee.coffeeType?.includes("cold_brew")}
                          onChange={(e) => {
                            const selected = coffee.coffeeType || [];
                            const value = "cold_brew";
                            console.log(value);
                            const updated = e.target.checked
                              ? [...selected, value]
                              : selected.filter((v) => v !== value);
                            updateCoffeeData("coffeeType", updated);
                          }}
                        />
                        <TagCheckbox
                          label="siphon"
                          checked={coffee.coffeeType?.includes("siphon")}
                          onChange={(e) => {
                            const selected = coffee.coffeeType || [];
                            const value = "siphon";
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
    )
}

export default Preps
