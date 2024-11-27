"use client";

import { default as Link } from "next/link";
import React, { useState } from "react";

import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Button from "../../reusable components/Button";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [hidden, setHidden] = useState<boolean>(false);

  function handleDropMenu() {
    setIsOpen(!isOpen);
  }

  function handleIsMenuOpen(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="relative py-5 px-6">
      <nav className="flex justify-between md:justify-around items-center gap-6 sticky">
        <div>
          {/* <Link href="/"><Image alt="alt_text" src="" height={100} width={100} /></Link> */}
          <Link href="#"><h1 className="text-2xl">Logo</h1></Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 justify-around">
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="/training-programs">Training programs</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
            <Button url="#" variant='primary'>Sign in</Button>
        </div>
        <div className="md:hidden">
          <button onClick={handleIsMenuOpen}>
            {isMenuOpen ? <MdClose size={30} /> : <SlMenu size={30} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="py-8 pl-6 rounded-lg absolute w-full left-0 border top-20 bg-white text-black mx-5">
          <ul className="flex flex-col gap-8">
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="/training-programs">Training programs</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}



export default Header;
