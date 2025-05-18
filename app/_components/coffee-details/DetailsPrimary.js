function DetailsPrimary({children, className}) {
    return (
        <div className={`overflow-hidden md:w-[60vw] w-[100%] flex md:flex-row flex-col align-middle md:justify-between justify-center md:h-[400px] h-auto ${className}`}>
            {children}
        </div>
    )
}

export default DetailsPrimary
