export function H2({ children, className }) {
  return (
    <h2
      className={`rounded-[1rem] text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin ${className}`}
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

export function CountryName({ children, className }) {
  return (
    <p className={`${className} `}>
      {children}
    </p>
  )
}
