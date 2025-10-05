function Tag({color, text, addClass, onClick, children}) {
    const tagColors = {
        decaf: "bg-primary-300",
        mild: "bg-primary-500",
        medium: "bg-primary-700",
        strong: "bg-primary-900",
        blend: "bg-primary-400",
        country: "bg-primary-700",
        Fruity: "bg-flavor-fruit",
        Citrus: "bg-flavor-citrus",
        Berries: "bg-flavor-berries",
        Floral: "bg-flavor-floral",
        Sweet: "bg-flavor-sweet",
        Nutty: "bg-flavor-nutty",
        Spicy: "bg-flavor-spicy",
        Herbal: "bg-flavor-herbal",
        Earthy: "bg-flavor-earthy",
        Roasted: "bg-flavor-roasted",
        Cereal: "bg-flavor-cereal",
        Fermented: "bg-flavor-fermented",
        Cocoa: "bg-flavor-cocoa",
        Speciality: "bg-tag-speciality",
      };
    return (
        <p onClick={onClick} className={` ${addClass} px-4 py-1 ${tagColors[color] || "bg-gray-300"} text-primary-50 h-auto w-auto uppercase text-center items-center justify-center text-[12px] xl:text-[14px] rounded-full`}>
            {text}
            {children}
        </p>
    )
}

export default Tag
