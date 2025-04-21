"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Connection() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2
          className={`justify-items-center text-gradient text-white text-4xl font-bold ${inter.className}`}
        >
          Join the Community !
        </h2>
        <p className="text-gray-400 mt-4 text-xl">
          Join this vibrant community and never miss an update from OWASP@OWTF.
          <br />
          (Over Slack, search for #<u>project-owtf</u> channel)
          <br />
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl min-w-5xl mx-auto justify-center">
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500 ">
          <a
            href="https://app.gitter.im/#/room/#owtf_owtf:gitter.im"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/gitter.png"}
              alt="Gitter"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-white text-xl font-bold">Gitter</h2>
          </a>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500 ">
          <a
            href="https://webchat.freenode.net/?channels=owtf"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/freenode.jpg"}
              alt="FreeNode"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-white text-xl font-bold">FreeNode</h2>
          </a>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500 ">
          <a
            href="https://owasp.org/slack/invite"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/slack.png"}
              alt="Slack"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-white text-xl font-bold">Slack</h2>
          </a>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500 ">
          <a
            href="https://www.openhub.net/p/owasp-owtf"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/openhub.png"}
              alt="Openhub"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-white text-xl font-bold">OpenHub</h2>
          </a>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500 ">
          <a href="https://x.com/owtfp" className="flex items-center space-x-4">
            <Image
              src={"/assets/x.webp"}
              alt="Twitter"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-white text-xl font-bold">Twitter</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
