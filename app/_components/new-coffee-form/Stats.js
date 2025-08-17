import { Input } from "../Inputs"
import { InfoParagraph } from "../Paragraphs"

function Stats({coffee, updateCoffeeData}) {
    return (
        <>
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
        </>
    )
}

export default Stats
