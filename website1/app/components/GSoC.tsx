"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function GSoC() {
  return <div className="bg-black text-white py-8 px-6"></div>;
}
