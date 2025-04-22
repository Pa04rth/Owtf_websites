"use client";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
  // fallback: ["Arial", "sans-serif"], // Add fallback fonts
});
export default function Features() {
  return (
    <div className="bg-black text-white py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="text-center">
          <Image
            src="/assets/easy.png"
            alt="UI"
            width={60}
            height={60}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold mt-4">Easy to Use -</h3>

          <ul className="list-disc pl-5 marker:text-green-500 text-gray-400 mt-2 text-left">
            <li>
              Web UI: Now configure and monitor OWTF via a responsive and
              powerful interface accessible via your browser.
            </li>
            <li>Exposes RESTful APIs to all core OWTF capabilties.</li>
          </ul>
        </div>
        {/* Feature 2 */}
        <div className="text-center">
          <Image
            src="/assets/globe.png"
            alt="Cross Platform"
            width={60}
            height={60}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold mt-4">Unites popular tools -</h3>

          <ul className="list-disc pl-5 text-gray-400 mt-2 marker:text-green-500 text-left">
            <li>
              Instead of implementing yet another spider (a hard job), OWTF will
              scrub the output of all tools/plugins run to gather as many URLs
              as possible.
            </li>
            <li>
              Scan by various aggression levels: OWTF supports scans which are
              based on the aggressiveness of the plugins/tools invoked.
            </li>
            <li>
              Extensible OWTF manages tools through 'plugins' making it trivial
              to add new tools.
            </li>
          </ul>
        </div>
        {/* Feature 3 */}
        <div className="text-center">
          <Image
            src="/assets/docker2.png"
            alt="Open Source"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h3 className="text-xl font-bold mt-4">Use OWTF anywhere -</h3>

          <ul className="list-disc pl-5 text-gray-400 mt-2 marker:text-green-500 text-left">
            <li>
              OWTF provides a Dockerfile to run on any platform Docker supports!
            </li>
            <li>A new Docker Compose version coming soon...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
