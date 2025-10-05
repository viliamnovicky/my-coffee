import BioIcon from "./BioIcon";
import Co2 from "@/public/icons/co2.png";

export function H2({ children, className }) {
  return (
    <h2
      className={`${className} rounded-[1rem] text-center text-primary-700 font-medium text-[1.5rem] xl:text-[1.6rem] italic`}
    >
      {children}
    </h2>
  );
}

export function P({ children, className }) {
  return <p className={`${className} text-primary-950 italic`}>{children}</p>;
}

export function CountryName({ className, coffee }) {
  return (
    <div className="xl:absolute relative xl:top-[50%] bottom-2 xl:bottom-auto xl:left-[1rem] left-[50%] translate-x-[-50%] xl:translate-x-0">
      {coffee.isClimaNeutral && (
        <BioIcon
          src={Co2}
          className="!aspect-video xl:!w-[80px] !w-[60px] opacity-75 xl:!relative !absolute top-0 xl:left-0 left-[1rem]"
        />
      )}

      <p
        className={`${className} uppercase text-primary-950 w-full text-center xl:text-left font-extrabold text-[3rem] opacity-[60%]`}
      >
        {coffee.origin[0] ? coffee.origin[0] : "unknown origin"}
      </p>
      {coffee.region && (
        <p className="px-[1rem] text-primary-800 italic mt-[-0rem]">
          Region: <span className="font-bold">{coffee.region}</span>
        </p>
      )}
      {coffee.farm && (
        <p className="px-[1rem] text-primary-800 italic ">
          Farm: <span className="font-bold">{coffee.farm}</span>
        </p>
      )}
    </div>
  );
}
