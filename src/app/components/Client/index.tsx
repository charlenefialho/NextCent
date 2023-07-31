import Image from "next/image";

import logo1 from "../../../../public/svg/Logo-1.svg";
import logo2 from "../../../../public/svg/Logo-2.svg";
import logo3 from "../../../../public/svg/Logo-3.svg";
import logo4 from "../../../../public/svg/Logo-4.svg";
import logo5 from "../../../../public/svg/Logo-5.svg";
import logo6 from "../../../../public/svg/Logo-6.svg";
import icon from "../../../../public/svg/iconMember.svg";
import iconAssociation from "../../../../public/svg/iconAssociation.svg";
import iconClubs from "../../../../public/svg/iconClubs.svg";

interface ICardCommunityProps {
  image: string;
  title: string;
  description: string;
}

const CardCommunity = ({ image, title, description }: ICardCommunityProps) => {
  return (
    <div className="px-8 py-6 max-w-[300px]">
      <div className="flex flex-col items-center">
        <Image src={image} alt="icone grupo de pessoas" />
      </div>
      <h3 className="pt-4 text-center text-neutral-d-gray text-2xl font-semibold">
        {title}
      </h3>
      <div className="text-neutral-grey text-center text-sm">{description}</div>
    </div>
  );
};

export function Client() {
  return (
    <section className="w-full flex flex-col items-center pt-10">
      <div className="flex flex-col text-center w-4/5">
        <h2 className="text-4xl md:text-5xl text-neutral-d-grey font-semibold">
          Our Clients
        </h2>
        <p className="font-base text-neutral-grey">
          We have been working with some Fortune 500+ clients
        </p>

        <div className="flex items-center justify-evenly mt-4 flex-wrap">
          <Image
            src={logo1}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
          <Image
            src={logo2}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
          <Image
            src={logo3}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
          <Image
            src={logo4}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
          <Image
            src={logo5}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
          <Image
            src={logo6}
            alt="logo"
            className="w-10 h-10 md:w-16 md:h-16 mx-2"
          />
        </div>
      </div>

      <section className="w-full flex justify-center pt-10">
        <div className="flex flex-col text-center w-full md:w-4/5 px-6 md:px-0">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-neutral-d-grey font-semibold">
            Manage your entire community in a single system
          </h2>
          <p className="font-base text-neutral-grey mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
      </section>

      <section className="w-full flex items-center justify-evenly mt-4 flex-wrap">
        <CardCommunity
          image={icon}
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <CardCommunity
          image={iconAssociation}
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <CardCommunity
          image={iconClubs}
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </section>
    </section>
  );
}
