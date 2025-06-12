export function H2({ children, className }) {
  return (
    <h2
      className={`${className} rounded-[1rem] text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin`}
    >
      {children}
    </h2>
  );
}

export function P({ children, className }) {
  return (
    <p
      className={`${className} text-center text-primary-950 italic`}
    >
      {children}
    </p>
  );
}

export function CountryName({ children, className, coffee }) {
  return (
    <div className="absolute xl:top-[50%] bottom-2 xl:bottom-auto xl:left-[1rem] left-[50%] translate-x-[-50%] xl:translate-x-0">
    <p className={`${className} uppercase text-primary-950 w-full text-center xl:text-left font-extrabold text-[3rem] opacity-[60%]`}>
      {coffee.origin[0] ? coffee.origin : "unknown origin"}
    </p>
    {coffee.region && <p className="text-primary-800 italic mt-[-1rem]">{coffee.region}</p>}
    </div>
  )
}
