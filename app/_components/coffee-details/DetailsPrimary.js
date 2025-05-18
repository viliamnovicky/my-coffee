function DetailsPrimary({children, className}) {
    return (
        <div className={`overflow-hidden md:w-[60vw] w-[95%] flex md:flex-row flex-col align-middle md:justify-between justify-center h-[400px] ${className}`}>
            {children}
        </div>
    )
}

export default DetailsPrimary
