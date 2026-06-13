import { Button } from "./ui/button";
import heroBackground from "../public/images/background.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[95%] relative flex items-center pt-24">
      <div className="max-w-7xl mx-auto p-4 space-y-8 relative z-10 text-white font-semibold">
        <h1 className="text-6xl w-2/3">Clean, affordable laundry on Eglinton Ave West</h1>
        <p className="text-lg">Self-serve washers, dryers, and laundry supplies available daily from 6 AM to 10 PM</p>

        <div className="flex items-center gap-4">
          <Button variant="laundry">Get Directions</Button>
          <Button className="border border-white bg-transparent hover:bg-white hover:text-black">View Services</Button>
        </div>
      </div>
      <Image src={heroBackground.src} alt="Temporary background for hero section" fill objectFit="cover" className="select-none" />
      <div className="top-0 left-0 size-full bg-neutral-700/75 absolute select-none" />
    </section>
  );
};

export default Hero;
