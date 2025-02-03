function InfoParagraph({children, color}) {
    return (
        <p className={`text-primary-950 p-2 uppercase flex items-center  ${color==="dark" ? "bg-primary-100/50" : "bg-primary-50/50"}`}>
            {children}
        </p>
    )
}

export default InfoParagraph
