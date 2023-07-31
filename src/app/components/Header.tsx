import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/svg/logo.svg";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="h-20 bg-white inline md:flex md:items-center">
      <nav className="py-3.5 py-4  inline md:flex md:items-center md:justify-between cursor-pointer">
        <div className="md:ml-24 ">
          <Image className="inline" src={Logo} alt="logo" />
        </div>
        <ul className="md:flex md:items-center md:justify-evenly">
          <li className="mr-12 md:my-0">
            <Link className="text-xl" href="/" />
            Home
          </li>
          <li className="mr-12 md:my-0">
            <Link href="/" />
            Service
          </li>
          <li className="mr-12 md:my-0">
            <Link href="/" />
            Feature
          </li>
          <li className="mr-12 md:my-0">
            <Link href="/" />
            Product
          </li>
          <li className="mr-12 md:my-0">
            <Link href="/" />
            Testimonial
          </li>
          <li className="mr-12 md:my-0">
            <Link href="/" />
            FAQ
          </li>
        </ul>
      </nav>
      <div className="flex gap-5 ">
        <Button className="bg-green px-5 py-2.5 text-white">Login</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
}
