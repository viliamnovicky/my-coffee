import { PiHeartFill, PiHeartLight } from "react-icons/pi";

export function InfoParagraph({ children, color, className }) {
  return (
    <div
      className={`text-primary-950 p-2 uppercase flex items-center gap-2 justify-between ${
        color === "dark" ? "bg-primary-100/50" : "bg-primary-50/50"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function StatParagraph({ name, color, value, IconFill, IconLight }) {
  const [filled, max] = value; // Extract values from array

  return (
    <p
      className={`text-primary-950 p-2 uppercase flex items-center gap-2 justify-between ${
        color === "dark" ? "bg-primary-100/50" : "bg-primary-50/50"
      }`}
    >
      <span>{name.toUpperCase()}</span>
      <span className="flex gap-[2px]">
        {/* Render light (empty) icons first */}
        {Array.from({ length: max - filled }, (_, index) => (
          <IconLight key={`light-${index}`} className="text-primary-950" />
        ))}

        {/* Render filled icons after */}
        {Array.from({ length: filled }, (_, index) => (
          <IconFill key={`fill-${index}`} className="text-primary-950" />
        ))}
      </span>
    </p>
  );
}
