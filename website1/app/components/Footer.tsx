"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function Footer() {
  return (
    <div
      className={`bg-zinc-900 text-gray-400 py-8 px-6 ${inter.className} font-normal`}
    >
      <footer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 mt-20">
        {/* Branding Section */}
        <div>
          <div className="flex items-center justify-start  space-x-2">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">OWASP@OWTF</span>
          </div>
          <p className="mt-4 font-normal text-sm md:text-base">
            Designed and built by OWTF Team and Leaders. Website built by{" "}
            <a href="https://github.com/Pa04rth" className="text-blue-300">
              Parth
            </a>{" "}
            (contributor).
          </p>
          <p className="mt-2 text-sm md:text-base">
            Code licensed{" "}
            <a
              className="text-blue-300"
              href="https://github.com/owtf/owtf/blob/develop/LICENSE.md"
            >
              License
            </a>
          </p>
          <p className="mt-2 text-sm md:text-base">Currently v2.6</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Home</li>
            <li>Docs</li>
            <li>Examples</li>
            <li>Icons</li>
            <li>Themes</li>
            <li>Blog</li>
            <li>Swag Store</li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Guides</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Getting started</li>
            <li>Starter template</li>
            <li>Webpack</li>
            <li>Parcel</li>
            <li>Vite</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Projects</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Bootstrap 5</li>
            <li>Bootstrap 4</li>
            <li>Icons</li>
            <li>RFS</li>
            <li>Examples repo</li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Community</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>Issues</li>
            <li>Discussions</li>
            <li>Corporate sponsors</li>
            <li>Open Collective</li>
            <li>Stack Overflow</li>
          </ul>
        </div>
      </footer>

      {/* Additional Content */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Spotlight Section */}
          <div className=" md:ml-20">
            <h3 className="text-white text-lg font-semibold mb-4">
              Spotlight: Backslash
            </h3>
            <Image
              src="/assets/backslash.png"
              alt="Backslash Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm md:text-base">
              Backslash is the first Cloud-Native Application Security solution
              for enterprise AppSec teams to provide unified security and
              business context to cloud-native code risk, coupled with automated
              threat modeling, code risk prioritization, and simplified
              remediation across applications and teams.
            </p>
          </div>

          {/* Corporate Supporters Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Corporate Supporters
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/salesforce.png"
                alt="Supporter 1"
                width={100}
                height={50}
              />
              <Image
                src="/assets/BDO.png"
                alt="Supporter 2"
                width={100}
                height={50}
              />
              <Image
                src="/assets/Checkmarxn.jpg"
                alt="Supporter 3"
                width={100}
                height={50}
              />
              <Image
                src="/assets/Beagle.png"
                alt="Supporter 4"
                width={100}
                height={50}
              />
              <Image
                src="/assets/atlassian.png"
                alt="Supporter 5"
                width={100}
                height={50}
              />
              <Image
                src="/assets/SecureFlag.png"
                alt="Supporter 6"
                width={100}
                height={50}
              />
              <Image
                src="/assets/fortify.png"
                alt="Supporter 7"
                width={100}
                height={50}
                className="mt-10"
              />
              <Image
                src="/assets/InfoSecMap.png"
                alt="Supporter 8"
                width={100}
                height={50}
              />
              <Image
                src="/assets/Raxis.png"
                alt="Supporter 9"
                width={100}
                height={50}
                className="mt-10"
              />
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-sm md:text-base">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">
            Copyright 2025, OWASP Foundation, Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
