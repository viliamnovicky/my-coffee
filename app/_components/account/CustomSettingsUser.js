import { useState } from "react";

import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";
import { Button } from "../Buttons";

export default function CustomSettings({ data, updateData }) {
  const [adding, setAdding] = useState(false);
  const [tempKey, setTempKey] = useState("");
  const [tempValue, setTempValue] = useState("");

  function addSetting() {
    if (!tempKey || !tempValue) return;

    const newSetting = { name: tempKey, value: tempValue };

    updateData("customSettings", [...(data.customSettings || []), newSetting]);

    // clear & close
    setTempKey("");
    setTempValue("");
    setAdding(false);
  }

  return (
    <InfoParagraph className="w-full flex flex-col gap-4">
      {/* Existing settings */}
      {data.customSettings?.map((setting, i) => (
        <div key={i} className="flex justify-between items-center bg-primary-50 p-3 rounded-md">
          <p>
            {setting.name}: {setting.value}
          </p>
        </div>
      ))}

      {/* Button to start adding */}
      {!adding && (
        <Button
          className="bg-primary-400"
          onClick={() => setAdding(true)}
        >
          Add new custom setting
        </Button>
      )}

      {/* Inputs for adding */}
      {adding && (
        <div className="flex flex-col gap-2 w-full">
          <Input
          addClass="flex justify-self-start w-full"
          className="w-full"
            type="text"
            label="Setting name"
            value={tempKey}
            onChange={(e) => setTempKey(e.target.value)}
          />

          <Input
          addClass="flex justify-self-end w-full"
          className="w-full"
            type="text"
            label="Setting value"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
          />

          <Button
            onClick={addSetting}
            className="bg-green-400"
          >
            Add setting
          </Button>
        </div>
      )}
    </InfoParagraph>
  );
}
