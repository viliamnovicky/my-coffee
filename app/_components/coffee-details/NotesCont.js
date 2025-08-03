import { H2, P } from "../Headings";
import DetailsPrimary from "./DetailsPrimary";
import Icon from "./Icon";

function NotesCont({ coffee }) {
  return (
    <DetailsPrimary className="bg-gradient-5 p-2 xl:p-[2rem] !flex-col">
      <H2 className="!text-left">My Notes</H2>
      <div className="flex flex-col">
        {coffee.notes.length > 0 &&
          coffee.notes.map(
            (note, i) =>
              note.length > 0 && (
                <P
                  key={"note-" + i}
                  className={`p-2 ${i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"}`}
                >
                  ∘ {note}
                </P>
              )
          )}
        {coffee.notes.length === 0 && <P className="p-2">A place for your notes...</P>}
      </div>
      <div className="flex gap-4 mt-4 flex-wrap xl:justify-start justify-between">
        {coffee.coffeeDrink &&
          coffee.coffeeDrink.map((drink) => (
            <div key={"drink" + drink} className="flex flex-col items-center">
              <Icon src={drink} />
              <P className="bg-primary-200 rounded-full px-2 mt-[-5px]">
                {drink.split("_")[0]}{" "}
                {drink.split("_")[1] && drink.split("_")[1] != "drink" ? drink.split("_")[1] : ""}
              </P>
            </div>
          ))}
      </div>
    </DetailsPrimary>
  );
}

export default NotesCont;
