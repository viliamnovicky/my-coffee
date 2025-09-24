function DetailsPrimary({children, className}) {
    return (
        <div className={`${className} overflow-hidden xl:w-[60vw] w-[100%] flex xl:flex-row flex-col align-middle xl:justify-between justify-center xl:h-[400px] h-auto rounded-[1rem]`}>
            {children}
        </div>
    )
}

export default DetailsPrimary
