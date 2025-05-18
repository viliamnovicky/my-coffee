function DetailsSecondary({ children, className }) {
  return (
    <div
      className={`md:w-[40vw] w-[100%] flex bg-gray-50 rounded-[1rem] md:h-[400px] h-auto ${className}`}
    >
      {children}
    </div>
  );
}

export default DetailsSecondary;
