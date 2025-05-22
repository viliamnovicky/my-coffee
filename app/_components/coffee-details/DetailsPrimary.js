function DetailsPrimary({children, className}) {
    return (
        <div className={`${className} overflow-hidden md:w-[60vw] w-[100%] flex md:flex-row flex-col align-middle md:justify-between justify-center md:h-[400px] h-auto`}>
            {children}
        </div>
    )
}

export default DetailsPrimary
