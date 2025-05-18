"use client"
import toast from "react-hot-toast";

export default function Home() {

function onClick() {
  toast.success("success" )
  toast.error("error")
}

  return (
    <div>
      <p className="text-primary-950">home</p>
      <button className="bg-black" onClick={onClick}>click</button>
    </div>
  );
}
