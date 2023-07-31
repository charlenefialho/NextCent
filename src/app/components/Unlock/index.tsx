import Image from "next/image";

import { Button } from "../Button";
import imgUnlock from "../../../../public/svg/imageUnlock.svg";

export function Unlock() {
  return (
    <section className="w-full h-screen mt-10 bg-neutral-silver flex justify-center items-center">
      <div className="w-full flex items-center gap-28 -mt-20 h-4/5">
        <Image
          className="hidden lg:block lg:ml-20"
          src={imgUnlock}
          width={391}
          height={407}
          alt="Ilustração"
        />
        <div className="flex  justify-center gap-28">
          <div className="p-5  lg:p-10 flex flex-col  leading-10">
            <h2 className=" font-semibold text-2xl md:text-3xl lg:text-4xl text-neutral-d-grey md:pr-20">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-neutral-grey text-sm md:text-base lg:text-lg pt-4 md:pr-20 xl:pr-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <div className="mt-8">
              <Button className="px-8 py-[14]">Register</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
