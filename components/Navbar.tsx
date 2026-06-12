"use client";

import { WashingMachine } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 h-24 w-full z-50 p-4 bg-laundry/66 text-white">
        <div className="max-w-7xl h-full mx-auto flex items-center justify-between my-auto gap-4">
          {/* Placeholder brand, will change */}
          <a href="#" className="flex items-center gap-2">
            <WashingMachine />
            <span className="font-bold">HI-TECH COIN LAUNDRY</span>
          </a>
          <ul className="flex items-center gap-8">
            <li>
              <Button asChild variant="link">
                <Link className="font-semibold text-white" href="#">
                  Services
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link className="font-semibold text-white" href="#">
                  Location
                </Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="link">
                <Link className="font-semibold text-white" href="#">
                  Contact
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="laundry" className="font-semibold">
                Get Directions
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
