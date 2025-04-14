import Navbar from "@/app/components/navbar";
import Masthead from "@/app/components/Masthead";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Home() {
  return (
    <div className={` text-white min-h-screen ${montserrat.className}`}>
      <Navbar />
      <Masthead />
    </div>
  );
}
