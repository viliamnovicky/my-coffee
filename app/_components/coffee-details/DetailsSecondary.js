function DetailsSecondary({ children, className }) {
  return (
    <div
      className={`md:w-[40vw] w-[100%] flex bg-gray-50 rounded-[1rem] h-[400px] ${className}`}
    >
      {children}
    </div>
  );
}

export default DetailsSecondary;
