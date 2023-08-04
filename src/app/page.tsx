import { Achievements } from "@/app/components/Achievements";
import { Client } from "@/app/components/Client";
import { Header } from "@/app/components/Header/index";
import { Hero } from "@/app/components/Hero";
import { Unlock } from "@/app/components/Unlock";

import mobileLoginRafikin from "@/app/assets/svg/mobileLoginRafikin.svg";
import mobileLoginPana from "@/app/assets/svg/mobileLoginPana.svg";
import { Footer } from "@/app/components/Footer";
import { Customer } from "@/app/components/Customer";
import { CommunityUpdate } from "@/app/components/CommunityUpdate";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Client />
      <Unlock
        imageUrl={mobileLoginRafikin}
        title="The unseen of spending three years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <Achievements />
      <Unlock
        imageUrl={mobileLoginPana}
        title="How to design your site footer like we did"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
      <Customer />
      <CommunityUpdate />
      <Footer />
    </div>
  );
}
