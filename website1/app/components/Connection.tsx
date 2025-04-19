"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Connection() {
  const apps = [
    { name: "Gitter", src: "/assets/Gitter.png" },
    { name: "Freenode", src: "/assets/Freenode.png" },
    { name: "Openhub", src: "/assets/Openhub.png" },
    { name: "Releases", src: "/assets/Releases.png" },
    { name: "Openhub", src: "/assets/Openhub.png" },
    { name: "Slack", src: "/assets/slack.png" },
  ];

  return (
    <div className="bg-zinc-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Join the Community !</h2>
        <p className="text-gray-400 mt-4">
          Thousands of organizations spanning all industries use Electron to
          build cross-platform software.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {apps.map((app) => (
          <div
            key={app.name}
            className="flex flex-col items-center justify-center bg-zinc-800 rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src={app.src}
              alt={app.name}
              width={48}
              height={48}
              className="mb-2"
            />
            <span className="text-sm font-medium">{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
