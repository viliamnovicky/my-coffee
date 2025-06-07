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
      className={`text-center text-primary-950 italic font-thin ${className}`}
    >
      {children}
    </p>
  );
}

export function CountryName({ children, className, coffee }) {
  return (
    <p className={`${className} uppercase text-primary-950 w-full text-center xl:text-left font-extrabold text-[3rem] absolute xl:top-[50%] bottom-0 xl:bottom-auto xl:left-[1rem] left-[50%] translate-x-[-50%] xl:translate-x-0 opacity-[60%]`}>
      {children}
    </p>
  )
}
