function Tag({color, text, addClass}) {
    const tagColors = {
        decaf: "bg-primary-300",
        mild: "bg-primary-500",
        medium: "bg-primary-700",
        strong: "bg-primary-900",
        blend: "bg-primary-400"
      };
    return (
        <p className={` ${addClass} px-2 py-1 ${tagColors[color] || "bg-gray-300"} text-primary-50 w-[120px] h-[30px] uppercase text-center items-center justify-center text-[14px] rounded-full`}>
            {text}
        </p>
    )
}

export default Tag
