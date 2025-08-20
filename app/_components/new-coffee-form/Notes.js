import { useNewCoffee } from "../../_context/NewCoffeeContext";

function Notes({ label = "Notes", placeholder = "Write a note...", className = "", coffee, updateCoffeeData }) {
  

  const handleNoteChange = (index, newValue) => {
    
    const updatedNotes = [...coffee.notes];
    updatedNotes[index] = newValue;
    updateCoffeeData("notes", updatedNotes);
  };

  const handleAddNote = (e) => {
    e.preventDefault()
    updateCoffeeData("notes", [...coffee.notes, ""]);
  };

  const handleRemoveNote = (e,index) => {
   e.preventDefault()
    const updatedNotes = coffee.notes.filter((_, i) => i !== index);
    updateCoffeeData("notes", updatedNotes);
  };

  return (
    <>
    <p className="uppercase text-center p-2">Notes</p>
    <div className="flex flex-col items-center bg-primary-100 w-full p-4 gap-3 rounded-md">
      {(coffee.notes && coffee.notes.length > 0) && coffee.notes.map((note, index) => (
        <div key={index} className="flex items-center gap-2 w-full justify-center">
          <input
            type="text"
            placeholder={placeholder}
            value={note}
            onChange={(e) => handleNoteChange(index, e.target.value)}
            className={`text-primary-950 rounded-md text-center border-none outline-none bg-white px-3 py-2 w-[80%] ${className}`}
            />
          <button
            onClick={(e) => handleRemoveNote(e, index)}
            className="text-red-500 text-sm hover:underline"
            >
            Remove
          </button>
        </div>
      ))}

      <button
        onClick={handleAddNote}
        className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-md hover:bg-primary-400 transition"
        >
        Add Note
      </button>
    </div>
        </>
  );
}

export default Notes;

