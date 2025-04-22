"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function Connection() {
  return (
    <div className="bg-black text-white py-15 px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2
          className={`text-white text-3xl md:text-4xl font-bold ${inter.className}`}
        >
          Join the Community!
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-lg">
          Join this vibrant community and never miss an update from OWASP@OWTF.
          <br />
          (Over Slack, search for <u>#project-owtf</u> channel)
        </p>
      </div>

      {/* Community Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Gitter */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-4 md:p-6 shadow-md border-2 border-zinc-500">
          <a
            href="https://app.gitter.im/#/room/#owtf_owtf:gitter.im"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/gitter.png"}
              alt="Gitter"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-white text-base md:text-xl font-bold">
              Gitter
            </h2>
          </a>
        </div>

        {/* FreeNode */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-4 md:p-6 shadow-md border-2 border-zinc-500">
          <a
            href="https://webchat.freenode.net/?channels=owtf"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/freenode.jpg"}
              alt="FreeNode"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-white text-base md:text-xl font-bold">
              FreeNode
            </h2>
          </a>
        </div>

        {/* Slack */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-4 md:p-6 shadow-md border-2 border-zinc-500">
          <a
            href="https://owasp.org/slack/invite"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/slack.png"}
              alt="Slack"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-white text-base md:text-xl font-bold">Slack</h2>
          </a>
        </div>

        {/* OpenHub */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-4 md:p-6 shadow-md border-2 border-zinc-500">
          <a
            href="https://www.openhub.net/p/owasp-owtf"
            className="flex items-center space-x-4"
          >
            <Image
              src={"/assets/openhub.png"}
              alt="OpenHub"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-white text-base md:text-xl font-bold">
              OpenHub
            </h2>
          </a>
        </div>

        {/* Twitter */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-4 md:p-6 shadow-md border-2 border-zinc-500">
          <a href="https://x.com/owtfp" className="flex items-center space-x-4">
            <Image
              src={"/assets/x.webp"}
              alt="Twitter"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-white text-base md:text-xl font-bold">
              Twitter
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}
