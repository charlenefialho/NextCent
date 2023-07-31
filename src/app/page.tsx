
import { Client } from "./components/Client";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero";
import { Unlock } from "./components/Unlock";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Client/>
      <Unlock/>
    </>
  );
}
