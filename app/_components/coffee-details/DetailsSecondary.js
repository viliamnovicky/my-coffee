function DetailsSecondary({ children, className }) {
  return (
    <div
      className={`${className} xl:w-[40vw] w-[100%] flex bg-gray-50 rounded-[1rem] h-auto`}
    >
      {children}
    </div>
  );
}

export default DetailsSecondary;
