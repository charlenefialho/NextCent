import Image from "next/image";

import imgCustomer from "../../../../public/image/customerImage.png";
import logo1 from "../../../../public/svg/Logo-1.svg";
import logo2 from "../../../../public/svg/Logo-2.svg";
import logo3 from "../../../../public/svg/Logo-3.svg";
import logo4 from "../../../../public/svg/Logo-4.svg";
import logo5 from "../../../../public/svg/Logo-5.svg";
import logo6 from "../../../../public/svg/Logo-6.svg";

export function Customer() {
  return (
    <section className="w-full max-w-[2560px] py-8 px-4 md:px-10 lg:px-20 xl:px-36 mt-10 bg-neutral-silver 2xl:justify-center 2xl:flex">
      <div className="flex flex-col lg:flex-row items-center justify-center 2xl:w-4/6">
        <Image
          className="w-full lg:w-[1000px] h-auto max-w-[300px]  md:max-w-[400px]  mx-auto lg:mx-0 mb-6 lg:mb-0"
          src={imgCustomer}
          width={391}
          height={407}
          alt="Ilustração"
        />
        <div className="flex flex-col justify-center">
          <p className="text-neutral-grey text-sm md:text-base lg:text-lg mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="font-semibold text-base md:text-lg lg:tex-xl text-primary mb-4">
            Tim Smith
          </h4>
          <p className="text-neutral-l-grey text-xs md:text-sm lg:text-base mb-6">
            British Dragon Boat Racing Association
          </p>
          <div className="sm:flex items-center ">
            <div className="flex items-center justify-start gap-10 flex-wrap">
              <Image
                src={logo1}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
              <Image
                src={logo2}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
              <Image
                src={logo3}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
              <Image
                src={logo4}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
              <Image
                src={logo5}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
              <Image
                src={logo6}
                alt="logo"
                className="w-5 h-5 md:w-10 md:h-10"
              />
            </div>

            <h4 className="text-center sm:text-start font-semibold text-base md:text-lg lg:tex-xl text-primary mb-4">
              Meet all customers
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
