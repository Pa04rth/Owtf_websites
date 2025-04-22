"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function GSoC() {
  const [activeTab, setActiveTab] = useState("Contributing");

  const tabs = [
    {
      name: "Contributing",
      content: (
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] p-4 md:mr-40 md:ml-40">
          <p className="text-gray-400 mb-4">
            Involvement in the development and promotion of OWTF is actively
            encouraged! You do not have to be a security expert to contribute.
            Some of the ways you can help:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-left">
            <li>
              <a
                href="https://github.com/owtf/owtf/pulls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Send us a pull request
              </a>
            </li>
            <li>
              <a
                href="https://github.com/owtf/owtf/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Give us feedback / suggestions / report bugs
              </a>
            </li>
            <li>
              <a
                href="https://owasp.org/slack/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Talk to us on Slack (#owtf or #project-owtf)
              </a>
            </li>
            <li>
              <a
                href="https://lists.owasp.org/mailman/listinfo/owtf-developers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join our OWTF developers mailing list
              </a>
            </li>
            <li>
              <a
                href="https://lists.owasp.org/mailman/listinfo/owasp-owtf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Join the general OWTF mailing list
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "News and Events",
      content: (
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] p-4 md:mr-40 md:ml-40">
          <h3 className="text-gray-400">
            Stay updated with the latest news and events from OWTF.
          </h3>
        </div>
      ),
    },
    {
      name: "Sponsors",
      content: (
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] p-4 md:mr-40 md:ml-40">
          <h3 className="text-gray-400">
            We have been helped by many organizations, either financially or
            through other means:
          </h3>
          <ul className="list-disc pl-5 text-gray-400 mt-2 marker:text-green-500 text-left">
            <li>
              <a
                href="http://www.owasp.org/"
                className="text-blue-500 hover:underline"
              >
                OWASP
              </a>
            </li>
            <li>
              <a
                href="http://www.elearnsecurity.com/"
                className="text-blue-500 hover:underline"
              >
                elearnSecurity
              </a>
            </li>
            <li>
              <a
                href="http://www.google-melange.com/"
                className="text-blue-500 hover:underline"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href="http://brucon.org/"
                className="text-blue-500 hover:underline"
              >
                BruCon
              </a>
            </li>
            <li>
              <a
                href="http://browserstack.com/"
                className="text-blue-500 hover:underline"
              >
                Browserstack
              </a>
              - for providing a platform to test OWTF on multiple devices!
            </li>
          </ul>
        </div>
      ),
    },
    {
      name: "Presentations and Talks",
      content: (
        <div className="rounded-lg bg-[rgba(255,255,255,0.1)] p-4 md:mr-40 md:ml-40">
          <h3 className="text-gray-400">
            The following links provide access to materials for OWTF talks
            (video, slides, etc.):
          </h3>
          <ul className="list-disc pl-5 text-gray-400 mt-2 marker:text-green-500 text-left">
            <li>
              <a
                href="http://blog.7-a.org/search/label/OWTF%20Talks"
                className="text-blue-500 hover:underline"
              >
                OWTF Talks at 7-a.org
              </a>
            </li>
            <li>
              You can see what OWASP OWTF is{" "}
              <a
                href="http://www.youtube.com/embed/H6Ut8U9a5KE"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
            </li>
            <li>
              OWASP OWTF 1.0 “Lionheart” - Brucon 2014 5x5 -{" "}
              <a
                href="https://www.youtube.com/embed/j2UoAsOLMB4"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
            </li>
            <li>
              OWASP AppSec EU 2013: Introducing OWASP OWTF 5x5 -{" "}
              <a
                href="http://www.youtube.com/embed/Vpca4-OlZqs"
                className="text-blue-500 hover:underline"
              >
                here
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/user/owtfproject/playlists"
                className="text-blue-500 hover:underline"
              >
                OWTF Playlists with Demos/Talks on Youtube
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black text-white py-8 px-4 md:px-6 text-center">
      {/* Main GSoC Section */}
      <div className="flex justify-center mb-6">
        <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-full">
          <Image
            src="/assets/gsoc.png"
            alt="GSoC Icon"
            width={120}
            height={120}
          />
        </div>
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold ${inter.className}`}>
        GSoC 2K25 - OWASP@OWTF !
      </h2>
      <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
        OWTF is taking part in the Google Summer of Code 2025! If you’d like to
        participate, see the link below:
      </p>
      <a
        href="https://owasp.org/www-community/initiatives/gsoc/gsoc2025ideas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-base md:text-lg font-bold mt-6 inline-block hover:underline"
      >
        OWASP GSoC 2025 Ideas →
      </a>

      {/* Tabbed Section */}
      <div className="mt-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-4 border-b border-gray-500 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`text-sm md:text-lg font-bold px-4 py-2 ${
                activeTab === tab.name
                  ? "text-green-500 border-b-2 border-green-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {tabs.find((tab) => tab.name === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}
