"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // menu + close icons
import NavbarLink from "./NavbarLink";
import { Button } from "./Buttons";
import Image from "next/image";

export default function NavbarMobile({ session }) {
  const [open, setOpen] = useState(false);

  // Close menu on link click
  function handleClose() {
    setOpen(false);
    console.log("click");
  }

  return (
    <div className="bg-primary-900 text-primary-50">
      {/* Top bar with hamburger */}
      <Button
        onClick={() => setOpen(!open)}
        className="absolute right-2 text-[1.5rem] top-[1rem] xl:hidden bg-primary-800 hover:bg-primary-700"
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </Button>

      {/* Slide-down menu */}
      {open && (
        <ul className="flex flex-col gap-2 bg-primary-200 p-4 w-screen">
          <NavbarLink path="/" onClick={handleClose}>
            Home
          </NavbarLink>
          <NavbarLink path="/coffees" onClick={handleClose}>
            Coffee
          </NavbarLink>

          {session && (
            <NavbarLink path="/my-coffee" onClick={handleClose}>
              My coffee
            </NavbarLink>
          )}
          {session && (
            <NavbarLink path="/account" onClick={handleClose}>
              Account
            </NavbarLink>
          )}
        </ul>
      )}
    </div>
  );
}
