"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export default function GetStarted() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-black text-white py-16 px-6 text-center">
      {/* Main Get Started Section */}
      <div className="flex justify-center mb-6">
        <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-full">
          <Image
            src="/assets/code.png"
            alt="Get Started Icon"
            width={100}
            height={100}
          />
        </div>
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold ${inter.className}`}>
        Get started any way you want
      </h2>
      <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
        Jump right into building with OWASP@OWTF—install it, configure it, or
        download the source code to get started.
      </p>
      <a
        href="https://owtf.readthedocs.io/en/develop/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-base md:text-lg font-bold mt-6 inline-block hover:underline"
      >
        Read installation docs →
      </a>

      {/* Additional Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 text-left">
        {/* Install via Package Manager */}
        <div className="bg-black p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Image
              src="/assets/Kali.png"
              alt="Kali Linux Icon"
              width={50}
              height={50}
            />
            <h3 className="text-lg md:text-xl font-bold ml-4">
              Install for Kali Linux
            </h3>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            To install OWTF for Kali Linux, follow the steps:
          </p>
          <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center">
            <span>$ pip install git+https://github.com/owtf/owtf#egg=owtf</span>
            <button
              title="Copy to clipboard"
              className="ml-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded text-xs"
              onClick={() => {
                navigator.clipboard.writeText(
                  "pip install git+https://github.com/owtf/owtf#egg=owtf"
                );
                alert("Copied to clipboard!");
              }}
            >
              <Image
                src="/assets/copy.png"
                alt="Copy to Clipboard"
                width={24} // Matches w-4 (16px)
                height={24} // Matches h-4 (16px)
              ></Image>
            </button>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
            <span>$ python setup.py install</span>
            <button
              title="Copy to clipboard"
              className="ml-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded text-xs"
              onClick={() => {
                navigator.clipboard.writeText("python setup.py install");
                alert("Copied to clipboard!");
              }}
            >
              <Image
                src="/assets/copy.png"
                alt="Copy to Clipboard"
                width={24} // Matches w-4 (16px)
                height={24} // Matches h-4 (16px)
              ></Image>
            </button>
          </div>
        </div>

        {/* For MacOS & Windows */}
        <div className="bg-black p-6 rounded-lg  ">
          <div className="flex items-center mb-4">
            <Image
              src="/assets/mac.png"
              alt="MAC Icon"
              width={50}
              height={50}
            />
            <h3 className="text-lg md:text-xl font-bold ml-4">
              Install for MacOS & Windows
            </h3>
          </div>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            To run OWTF on Windows or MacOS, use the Dockerfile (requires Docker
            installed) provided to try OWTF:
          </p>
          <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center">
            <span>$ make docker-build && make docker-run</span>
            <button
              title="Copy to clipboard"
              className="ml-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded text-xs"
              onClick={() => {
                navigator.clipboard.writeText(
                  "make docker-build && make docker-run"
                );
                alert("Copied to clipboard!");
              }}
            >
              <Image
                src="/assets/copy.png"
                alt="Copy to Clipboard"
                width={24} // Matches w-4 (16px)
                height={24} // Matches h-4 (16px)
              ></Image>
            </button>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
            <span>
              Open ~/.owtf/conf and change SERVER_ADDR: 127.0.0.1 to
              SERVER_ADDR: 0.0.0.0.
            </span>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
            <span>
              Create a virtualenv, virtualenv env and activate it source
              env/bin/activate.
            </span>
          </div>

          {/* Show More Section */}
          {showMore && (
            <>
              <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
                <span>Install and run OWTF.</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
                <span>
                  $ cd owtf/; python setup.py develop && python -m owtf
                </span>
                <button
                  title="Copy to clipboard"
                  className="ml-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 rounded text-xs"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "cd owtf/; python setup.py develop && python -m owtf"
                    );
                    alert("Copied to clipboard!");
                  }}
                >
                  <Image
                    src="/assets/copy.png"
                    alt="Copy to Clipboard"
                    width={24} // Matches w-4 (16px)
                    height={24} // Matches h-4 (16px)
                  ></Image>
                </button>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] p-4 rounded-lg text-gray-300 font-mono text-xs md:text-sm flex justify-between items-center mt-4">
                <span>Open localhost:8009 for OWTF web interface.</span>
              </div>
            </>
          )}

          {/* Show More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-green-500 font-bold hover:underline"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
