"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

import ilustration from "../../../../public/svg/Illustration.svg";
import { Button } from "../Button";

export function Hero() {
  return (
    <section className="w-full h-screen bg-neutral-silver flex justify-center items-center">
      <Carousel leftControl="." rightControl="." slide={false} className="-mt-20 h-4/5">
        <div className="flex  justify-center gap-28">
          <div className="p-5 lg:p-10 flex flex-col items-center md:items-start leading-10">
            <h1 className=" text-center md:text-left font-semibold text-4xl md:text-5xl lg:text-6xl text-neutral-d-grey ">
              Lessons and insights{" "}
            </h1>
            <h1 className="font-semibold  text-primary text-4xl md:text-5xl md:text-left lg:text-6xl">from 8 years</h1>
            <p className="text-center  text-neutral-grey text-sm md:text-base md:text-left pt-4">Where to grow your business as a photographer: site or social media?</p>
            <div className="mt-8">
              <Button className="px-8 py-[14]">Register</Button>
            </div>
          </div>
          <Image className="hidden lg:block lg:pr-10" src={ilustration} width={391} height={407} alt="Ilustração"  />
        </div>

        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
      </Carousel>
    </section>
  );
}
