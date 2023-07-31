"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

import Logo from "../../../../public/svg/logo.svg";
import { Button } from "../Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className=" flex justify-between my-8 md:my-8 md:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <Image className="inline ml-7" src={Logo} alt="nextcent" />

        <button
          className="lg:hidden block cursor-pointer pr-10 "
          onClick={() => setOpen(!open)}
        >
          <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer  " />
        </button>

        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:flex lg:items-center mx-auto lg:w-auto lg:gap-5 xl:gap-10`}
        >
          <ul className="w-full text-lg pt-5 font-medium   md:pt-0 lg:flex  lg:justify-between lg:items-center  gap-5">
            <li>
              <Link className="py-3 block font-base text-center" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="py-3 block text-center" href="#">
                Service
              </Link>
            </li>
            <li>
              <Link className="py-3 block text-center" href="#">
                Feature
              </Link>
            </li>
            <li>
              <Link className="py-3 block text-center" href="#">
                Product
              </Link>
            </li>
            <li>
              <Link className="py-3 block text-center" href="#">
                Testimonial
              </Link>
            </li>
            <li>
              <Link className="py-3 block text-center" href="#">
                FAQ
              </Link>
            </li>
          </ul>
          <div className=" text-base w-full flex flex-col items-center lg:flex-row lg:flex lg:gap-3.5 lg:mr-10 lg:ml-20">
            <Button
              className="lg:w-1/2 block px-5 rounded-lg text-sm"
              variant="tertiary"
            >
              <Link className=" block lg:px-5 py-2.5 " href="#">
                Login
              </Link>
            </Button>
            <Button className="w-1/3 lg:w-1/2  block rounded-lg ">
              <Link className="block lg:px-5 py-2.5  " href="#">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
