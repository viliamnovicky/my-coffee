import { H2, P } from "../Headings";
import DetailsPrimary from "./DetailsPrimary";

function NotesCont({ coffee }) {
  return (
    <DetailsPrimary className="bg-gradient-5 p-2 xl:p-[2rem]">
      <H2 className="p-[1rem] ">My Notes</H2>
      <div className="flex flex-col">
        {coffee.notes.length > 0 &&
          coffee.notes.map((note, i) => (
            note.length > 0 && <P key={"note-" + i} className={`p-2 ${i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"}`}>
              ∘ {note}
            </P>
          ))}
        {coffee.notes.length === 0 && <P className="p-2">A place for your notes...</P>}
      </div>
    </DetailsPrimary>
  );
}

export default NotesCont;
