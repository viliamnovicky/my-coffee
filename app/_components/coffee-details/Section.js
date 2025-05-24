function Section({ children, className }) {
  return (
    <div className={`flex w-screen rounded-[1rem] xh:h-[500px] h-[100%] justify-between p-[1rem] xl:flex-row flex-col gap-[1rem] ${className}`}>
      {children}
    </div>
  );
}

export default Section;
