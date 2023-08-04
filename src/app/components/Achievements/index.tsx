import Image from "next/image";

import iconClubs from "@/app/assets/svg/iconClubs.svg";
import iconPeople from "@/app/assets/svg/iconPeople.svg";
import iconFinger from "@/app/assets/svg/iconFinger.svg";
import iconPayment from "@/app/assets/svg/iconPayment.svg";

interface ICounts {
  imageUrl: string;
  number: string;
  label: string;
}

export function Achievements() {
  return (
    <section className="w-full max-w-[2560px] md:flex md:justify-center py-8 px-4 md:px-10 lg:px-20 xl:px-36 mt-10 bg-neutral-silver">
      <section
        className=" w-full sm:flex justify-center md:justify-between 2xl:w-7/12
      min-[2560px]:w-5/12 "
      >
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
          <Count imageUrl={iconPeople} number="2,245,341" label="Members" />
          <Count imageUrl={iconClubs} number="46,328" label="Clubs" />
          <Count
            imageUrl={iconFinger}
            number="828,867"
            label="Event Bookings"
          />
          <Count imageUrl={iconPayment} number="1,926,436" label="Payments" />
        </section>
      </section>
    </section>
  );
}

function Count({ imageUrl, number, label }: ICounts) {
  return (
    <section className="flex items-center gap-4 justify-center">
      <div>
        <Image src={imageUrl} alt="" className="w-12 h-12 " />
      </div>
      <div>
        <h3 className="text-neutral-d-grey font-semibold md:text-[28px]">
          {number}
        </h3>
        <p className="text-neutral-grey font-base">{label}</p>
      </div>
    </section>
  );
}
