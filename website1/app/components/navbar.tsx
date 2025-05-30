"use client";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, Sun, Moon, ChevronDown, Menu, Github, X } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Kbd } from "@/app/components/ui/kbd";
import { SearchCommand } from "@/app/components/search-command";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav className="bg-[#111111]  text-white h-16 px-20 flex items-center  shadow-md">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Website Logo"
              width={40} // Matches w-10 (40px)
              height={40} // Matches h-10 (40px)
              className="h-10 w-10"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="hidden md:flex ml-2 space-x-1">
          <Link
            href="/docs"
            className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
          >
            Projects
          </Link>
          <Link
            href="/examples"
            className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
          >
            Chapter
          </Link>
          <Link
            href="/icons"
            className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
          >
            Events
          </Link>
          <Link
            href="/themes"
            className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
          >
            Download
          </Link>
        </div>

        {/* Right Section - Search and Utilities */}
        <div className="flex items-center ml-auto space-x-2">
          {/* Search Box */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center bg-[rgba(255,255,255,0.15)] rounded px-3 py-1 h-8 w-50"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2 opacity-70" />
              <span className="items-end justify-end text-sm opacity-70">
                Search
              </span>
              <div className="flex items-center  ml-auto px-1 py-0.5 rounded bg-[rgba(255,255,255,0.2)] text-[10px]">
                <span className="mr-0.5">⌘</span>
                <span>+ K</span>
              </div>
            </button>
          </div>

          {/* Utility Icons */}
          <div className="flex items-end justify-end space-x-2 ">
            <a href="https://owasp.org/donate?reponame=www-project-owtf&title=OWASP+OWTF ">
              <button className="flex items-center justify-center bg-[rgba(255,255,255,0.15)] rounded px-1 py-1 h-8 w-25">
                <div className="flex items-center  px-1 py-0.5 rounded bg-white text-[10px]">
                  <span className="mr-0.5">❤️</span>
                </div>
                <span className="ml-2 text-sm opacity-70">Donate</span>
              </button>
            </a>
            <a href="https://www.zazzle.com/store/owasp_foundation/products ">
              <button className="flex items-center justify-center bg-[rgba(255,255,255,0.15)] rounded px-1 py-1 h-8 w-23">
                <div className="flex items-center  px-1 py-0.5 rounded bg-white text-[10px]">
                  <span className="mr-0.5">
                    <Image
                      src="/assets/store.svg"
                      alt="Store"
                      width={16} // Matches w-4 (16px)
                      height={16} // Matches h-4 (16px)
                      className="h-4 w-4"
                    />
                  </span>
                </div>
                <span className="ml-2 text-sm opacity-70">Store</span>
              </button>
            </a>
            <a href="https://owasp.glueup.com/">
              <button className="flex items-center justify-center bg-[rgba(255,255,255,0.15)] rounded px-2 py-1 h-8 w-23">
                <div className="flex items-center justify-center px-1 py-0.5 rounded bg-white text-[10px]">
                  <Image
                    src="/assets/join.svg"
                    alt="Join"
                    width={16} // Matches w-4 (16px)
                    height={16} // Matches h-4 (16px)
                    className="h-4 w-4 "
                  />
                </div>
                <span className="ml-2 text-sm opacity-70">Join</span>
              </button>
            </a>
            <a
              href="https://github.com/owtf/owtf"
              className="hover:bg-[rgba(255,255,255,0.2)] p-1.5 rounded-full"
              title="Visit OWTF GitHub Repository"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Version Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded">
              <span className="text-sm mr-1">v 2.6</span>
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 text-white bg-[#111111] shadow-md ">
              <DropdownMenuItem className="text-sm hover:bg-[rgba(255,255,255,0.2)]">
                v 2.6 (current)
              </DropdownMenuItem>
              <a href="https://github.com/owtf/owtf/releases/tag/v2.5.0">
                <DropdownMenuItem className="text-sm hover:bg-[rgba(255,255,255,0.2)]">
                  v 2.5
                </DropdownMenuItem>
              </a>
              <a href="https://github.com/owtf/owtf/releases/tag/v2.4">
                <DropdownMenuItem className="text-sm hover:bg-[rgba(255,255,255,0.2)]">
                  v 2.4
                </DropdownMenuItem>
              </a>
              <a href="https://github.com/owtf/owtf/releases/tag/v2.3">
                <DropdownMenuItem className="text-sm hover:bg-[rgba(255,255,255,0.2)]">
                  Bugsquash
                </DropdownMenuItem>
              </a>
              <DropdownMenuSeparator />
              <a href="https://github.com/owtf/owtf/releases">
                <DropdownMenuItem className="text-sm hover:bg-[rgba(255,255,255,0.2)]">
                  All versions
                </DropdownMenuItem>
              </a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[rgba(255,255,255,0.2)] text-white p-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link
              href="/docs"
              className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
            >
              Docs
            </Link>
            <Link
              href="/examples"
              className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
            >
              Examples
            </Link>
            <Link
              href="/icons"
              className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
            >
              Icons
            </Link>
            <Link
              href="/themes"
              className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
            >
              Themes
            </Link>
            <Link
              href="/blog"
              className="font-medium hover:bg-[rgba(255,255,255,0.2)] px-2 py-1 rounded"
            >
              Blog
            </Link>

            {/* Mobile Search Box */}
            <div className="relative mt-2">
              <div
                className="flex items-center bg-[rgba(255,255,255,0.15)] rounded px-3 py-2"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4 mr-2 opacity-70" />
                <span className="text-sm opacity-70">Search</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Command Dialog */}
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
}
