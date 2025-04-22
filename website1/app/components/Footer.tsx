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
            <li>
              <a
                href="https://owtf.github.io/"
                className="hover:underline hover:text-blue-300"
              >
                Getting Started
              </a>
            </li>
            <li>
              <a
                href="https://owtf.github.io/#download"
                className="hover:underline hover:text-blue-300"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/releases"
                className="hover:underline hover:text-blue-300"
              >
                Releases
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/"
                className="hover:underline hover:text-blue-300"
              >
                Repository
              </a>
            </li>
            <li>
              <a
                href="https://owtf.readthedocs.io/en/develop/"
                className="hover:underline hover:text-blue-300"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Github</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>
              <a
                href="https://github.com/owtf/owtf/issues"
                className="hover:underline hover:text-blue-300"
              >
                Issues
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/pulls"
                className="hover:underline hover:text-blue-300"
              >
                Pulls
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/blob/develop/CODE_OF_CONDUCT.md"
                className="hover:underline hover:text-blue-300"
              >
                Code of Conduct
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/blob/develop/CONTRIBUTING.md"
                className="hover:underline hover:text-blue-300"
              >
                Contributing
              </a>
            </li>
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Blog</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>
              <a
                href="http://blog.7-a.org/search/label/OWTF%20Release"
                className="hover:underline hover:text-blue-300"
              >
                Release Blog
              </a>
            </li>
            <li>
              <a
                href="http://blog.7-a.org/search/label/OWTF%20Talks"
                className="hover:underline hover:text-blue-300"
              >
                Talk Blog
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@owtf"
                className="hover:underline hover:text-blue-300"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">Community</h3>
          <ul className="space-y-1 text-sm md:text-base">
            <li>
              <a
                href="https://owasp.org/slack/invite"
                className="hover:underline hover:text-blue-300"
              >
                Slack
              </a>
            </li>
            <li>
              <a
                href="https://app.gitter.im/#/room/#owtf_owtf:gitter.im"
                className="hover:underline hover:text-blue-300"
              >
                Gitter
              </a>
            </li>
            <li>
              <a
                href="https://webchat.freenode.net/?channels=owtf"
                className="hover:underline hover:text-blue-300"
              >
                Freenode
              </a>
            </li>
            <li>
              <a
                href="https://www.openhub.net/p/owasp-owtf"
                className="hover:underline hover:text-blue-300"
              >
                Openhub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/owtfp"
                className="hover:underline hover:text-blue-300"
              >
                Twitter
              </a>
            </li>
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
            <a href="https://www.backslash.security/">
              <Image
                src="/assets/backslash.png"
                alt="Backslash Logo"
                width={150}
                height={50}
                className="mb-4  "
              />
            </a>

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
              <a href="https://www.salesforce.com/">
                <Image
                  src="/assets/salesforce.png"
                  alt="Supporter 1"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://www.bdo.global/">
                <Image
                  src="/assets/BDO.png"
                  alt="Supporter 2"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://checkmarx.com/">
                <Image
                  src="/assets/Checkmarxn.jpg"
                  alt="Supporter 3"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://beaglesecurity.com/">
                <Image
                  src="/assets/Beagle.png"
                  alt="Supporter 4"
                  width={100}
                  height={50}
                />
              </a>

              <a href="https://www.atlassian.com/">
                <Image
                  src="/assets/atlassian.png"
                  alt="Supporter 5"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://www.secureflag.com/index.html">
                <Image
                  src="/assets/SecureFlag.png"
                  alt="Supporter 6"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://fortifyapp.com/">
                <Image
                  src="/assets/fortify.png"
                  alt="Supporter 7"
                  width={100}
                  height={50}
                  className="mt-10"
                />
              </a>
              <a href="https://infosecmap.com/">
                <Image
                  src="/assets/InfoSecMap.png"
                  alt="Supporter 8"
                  width={100}
                  height={50}
                />
              </a>
              <a href="https://raxis.com/">
                <Image
                  src="/assets/Raxis.png"
                  alt="Supporter 9"
                  width={100}
                  height={50}
                  className="mt-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-sm md:text-base">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="https://owasp.org/www-policy/operational/privacy"
              className="hover:underline text-blue-300"
            >
              Privacy
            </a>
            <a
              href="https://owasp.org/sitemap/"
              className="hover:underline text-blue-300"
            >
              Sitemap
            </a>
            <a
              href="https://owasp.org/contact/"
              className="hover:underline text-blue-300"
            >
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
