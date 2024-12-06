"use client";

// import { default as Link } from "next/link";
import { Link } from "next-view-transitions";
import React, { useState } from "react";

import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import Button from "../../reusable components/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleIsMenuOpen(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="sticky top-0 py-5 px-6 bg-blue-600">
      <nav className="flex justify-between md:justify-around items-center gap-6">
        <div>
          {/* <Link href="/"><Image alt="alt_text" src="" height={100} width={100} /></Link> */}
          <Link href="/">
            <h1 className="text-2xl">Logo</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 justify-around">
            <li className="font-bold hover:underline hover:text-blue-600 transition-all">
              <Link href="/contact-me">Contact me</Link>
            </li>
            <li className="font-bold hover:underline hover:text-blue-600 transition-all">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-bold hover:underline hover:text-blue-600 transition-all">
              <Link href="/services">Services</Link>
            </li>
            <li className="font-bold hover:underline hover:text-blue-600 transition-all">
              <Link href="/about-me">About me</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Button url="#" variant="primary">
            Sign in
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={handleIsMenuOpen}>
            {isMenuOpen ? <MdClose size={30} /> : <SlMenu size={30} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="py-8 pl-6 mx-5 rounded-lg absolute w-full -left-5 border top-20 bg-white text-black">
          <ul className="flex flex-col gap-8">
            <li className="hover:text-blue-600 hover:underline font-bold">
              <Link href="/contact-us">Contact Me</Link>
            </li>
            <li className="hover:text-blue-600 hover:underline font-bold">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-blue-600 hover:underline font-bold">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-blue-600 hover:underline font-bold">
              <Link href="/about-me">About me</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
