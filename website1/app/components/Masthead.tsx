"use client";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Masthead() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black border-t-2 border-zinc-500">
      <div className="flex flex-col items-center justify-center -mt-20">
        {" "}
        {/* Added -mt-20 */}
        <Image
          src="/assets/OWASP-Logo.png"
          alt="Logo"
          width={240} // Specify the width
          height={240} // Specify the height
          className=" w-60 h-60 rounded-full"
        />
        <br />
        <h1
          className={`justify-items-center text-gradient text-white text-6xl  `}
        >
          OWASP@
        </h1>
        <h1
          className={`justify-items-center text-gradient text-white text-6xl font-bold ${inter.className}`}
        >
          Offensive Web Testing Framework
        </h1>
        <h2
          className={`items-center justify-items-center mt-4 text-zinc-500 text-2xl font-normal ${inter.className}`}
        >
          A project that aims to make security assessments as efficient as
          <br />
          possible by automating the manual, uncreative part of pen testing .
        </h2>
      </div>
      <div className="flex items-center space-x-4 mt-8">
        {/* Command Box */}
        <div className="flex items-center justify-center bg-[rgba(255,255,255,0.1)] rounded px-4 py-2 text-white text-xl font-mono h-16 w-145">
          <span>$ git clone https://github.com/owtf/owtf.git</span>
          <button
            className="ml-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded text-xs"
            onClick={() => {
              navigator.clipboard.writeText(
                "git clone https://github.com/owtf/owtf.git"
              );
              alert("Copied to clipboard!");
            }}
          >
            📋
          </button>
        </div>

        {/* Read the Docs Button */}
        <a
          href="#"
          className={`flex items-center bg-green-600 hover:bg-green-700 text-white h-16 w-56 px-4 py-2 rounded text-xl font-normal ${inter.className}`}
        >
          📖 Read the docs
        </a>
      </div>
    </div>
  );
}
