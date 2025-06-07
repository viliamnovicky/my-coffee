import { H2, P } from "../Headings"
import DetailsPrimary from "./DetailsPrimary"

function NotesCont({coffee}) {
    return (
        <DetailsPrimary className="bg-gradient-5 p-[2rem]">
          <H2 className="p-[1rem]">My Notes</H2>
          <P className="p-[1rem]">
            {coffee.notes ? coffee.notes : "A place for your notes, findings, thoughs..."}
          </P>
        </DetailsPrimary>
    )
}

export default NotesCont
