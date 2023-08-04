import Image from "next/image";

import iconClubs from "../../../../public/svg/iconClubs.svg";

interface ICounts {
  imageUrl: string;
  number: string;
  label: string;
}

export function Achievements() {
  return (
    <section className="w-full max-w-[2560px] md:flex md:justify-center py-8 px-4 md:px-10 lg:px-20 xl:px-36 mt-10 bg-neutral-silver">
      <section className=" w-full sm:flex justify-center md:justify-between 2xl:w-7/12
      min-[2560px]:w-5/12 ">
        <section className="flex flex-col  md:flex-row justify-between items-center ">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-neutral-d-grey">
              Helping a local{" "}
            </h2>
            <h2 className="font-semibold text-primary text-2xl md:text-3xl xl:text-4xl lg:text-4xl">
              business reinvent itself
            </h2>
            <p className="text-center md:text-left text-gray-900 text-sm md:text-base pt-4">
              We reached here with our hard work and dedication
            </p>
          </div>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-7">
          <Count />
          <Count />
          <Count />
          <Count />
        </section>
      </section>
    </section>
  );
}

function Count() {
  return (
    <section className="flex items-center gap-4 justify-center">
      <div>
        <Image src={iconClubs} alt="" className="w-12 h-12 " />
      </div>
      <div>
        <h3 className="text-neutral-d-grey font-semibold md:text-[28px]">2,245,341</h3>
        <p className="text-neutral-grey font-base">Members</p>
      </div>
    </section>
  );
}
