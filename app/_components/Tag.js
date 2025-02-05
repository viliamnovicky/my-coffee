function Tag({color, text}) {
    const tagColors = {
        decaf: "bg-primary-300",
        mild: "bg-primary-500",
        medium: "bg-primary-700",
        strong: "bg-primary-900",
      };
    return (
        <p className={`px-2 py-1 ${tagColors[color] || "bg-gray-300"} text-primary-50 w-[120px] h-[30px] uppercase text-center items-center justify-center text-[14px] rounded-full absolute md:right-[75px] md:bottom-[65px] right-[55px] bottom-[120px]`}>
            {text}
        </p>
    )
}

export default Tag
