function Section({ children, className }) {
  return (
    <div className={`flex w-[100vw] rounded-[1rem] md:h-[500px] h-[100%] justify-between p-[1rem] md:flex-row flex-col gap-[1rem] ${className}`}>
      {children}
    </div>
  );
}

export default Section;
