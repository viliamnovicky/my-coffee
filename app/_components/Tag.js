function Tag({color, text, addClass, onClick}) {
    const tagColors = {
        decaf: "bg-primary-300",
        mild: "bg-primary-500",
        medium: "bg-primary-700",
        strong: "bg-primary-900",
        blend: "bg-primary-400",
        country: "bg-primary-700",
        Fruity: "bg-flavor-fruit",
        Floral: "bg-flavor-floral",
        Sweet: "bg-flavor-sweet",
        Nutty: "bg-flavor-nutty",
        Spicy: "bg-flavor-spicy",
        Herbal: "bg-flavor-herbal",
        Earthy: "bg-flavor-earthy",
        Roasted: "bg-flavor-roasted",
        Cereal: "bg-flavor-cereal",
      };
    return (
        <p onClick={onClick} className={` ${addClass} px-2 py-1 ${tagColors[color] || "bg-gray-300"} text-primary-50 w-[90px] h-[25px] md:w-[120px] md:h-[30px] uppercase text-center items-center justify-center text-[12px] md:text-[14px] rounded-full`}>
            {text}
        </p>
    )
}

export default Tag
