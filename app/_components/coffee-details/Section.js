function Section({ children, className }) {
  return (
    <div className={`flex w-screen rounded-[1rem] h-[100%] justify-between p-[1rem] xl:pb-[1rem] pb-0 xl:flex-row flex-col gap-[1rem] ${className}`}>
      {children}
    </div>
  );
}

export default Section;
