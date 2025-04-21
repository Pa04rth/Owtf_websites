"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Leaders() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2
          className={`justify-items-center text-gradient text-white text-4xl font-bold ${inter.className}`}
        >
          Meet the Leaders !
        </h2>
        <p className="text-gray-400 mt-4 text-xl">
          Meet the leaders of OWASP@OWTF and learn more about their
          contributions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500">
          <Image
            src="/assets/leader1.jpg"
            alt="Abraham Aranguran (7A)"
            width={400}
            height={400}
            className="rounded-t-2xl"
          />
          <h2 className="text-white text-xl font-bold mt-4 text-center">
            Abraham Aranguran
          </h2>
          <div className="flex justify-around mt-4">
            <a
              href="https://www.linkedin.com/in/abrahamaranguren/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="https://x.com/7aSecurity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/x.webp"
                alt="Twitter"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="https://github.com/7a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/github.webp"
                alt="GitHub"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="mailto:abraham.aranguren@owasp.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/mail.png"
                alt="GitHub"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-md border-2 border-zinc-500">
          <Image
            src="/assets/leader2.jpg"
            alt="Leader 2"
            width={400}
            height={400}
            className="rounded-t-2xl"
          />
          <h2 className="text-white text-xl font-bold mt-4 text-center">
            Viyat Bhalodia
          </h2>
          <div className="flex justify-around mt-4">
            <a
              href="https://www.linkedin.com/in/viyatbhalodia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="https://x.com/viyat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/x.webp"
                alt="Twitter"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="https://github.com/viyatb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/github.webp"
                alt="GitHub"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
            <a
              href="mailto:viyat.bhalodia@owasp.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/mail.png"
                alt="GitHub"
                width={50}
                height={50}
                className="hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
