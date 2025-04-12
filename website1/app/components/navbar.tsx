"use client";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Search,
  HelpCircle,
  Twitter,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  Github,
  X,
} from "lucide-react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

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
      <nav className="bg-[#111111] text-white h-16 px-20 flex items-center justify-between shadow-md">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="../assets/logo.png"
              alt="Website Logo"
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
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/docs"
            className="font-medium hover:bg-[#5dd62c] px-2 py-1 rounded"
          >
            Docs
          </Link>
          <Link
            href="/examples"
            className="font-medium hover:bg-[#5dd62c] px-2 py-1 rounded"
          >
            Examples
          </Link>
          <Link
            href="/icons"
            className="font-medium hover:bg-[#5dd62c] px-2 py-1 rounded"
          >
            Icons
          </Link>
          <Link
            href="/themes"
            className="font-medium hover:bg-[#5dd62c] px-2 py-1 rounded"
          >
            Themes
          </Link>
          <Link
            href="/blog"
            className="font-medium hover:bg-[#5dd62c] px-2 py-1 rounded"
          >
            Blog
          </Link>
        </div>

        {/* Right Section - Search and Utilities */}
        <div className="flex items-center ">
          {/* Search Box */}
          <div className="relative hidden md:block">
            <button
              className="flex items-center bg-[rgba(255,255,255,0.15)] rounded px-3 py-1"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2 opacity-70" />
              <span className="text-sm opacity-70">Search</span>
              <div className="flex items-center justify-center ml-2 px-1 py-0.5 rounded bg-[rgba(255,255,255,0.2)] text-[10px]">
                <span className="mr-0.5">⌘</span>
                <span>K</span>
              </div>
            </button>
          </div>

          {/* Utility Icons */}
          <a href="#" className="hover:bg-[#9A6FF4] p-1.5 rounded-full">
            <HelpCircle size={18} />
          </a>
          <a href="#" className="hover:bg-[#9A6FF4] p-1.5 rounded-full">
            <img src="../assets/x.svg" alt="x" className="h-4 w-4" />
          </a>
          <a href="#" className="hover:bg-[#9A6FF4] p-1.5 rounded-full">
            <Github size={18} />
          </a>

          {/* Version Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:bg-[#9A6FF4] px-2 py-1 rounded">
              <span className="text-sm mr-1">v5.3</span>
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuItem className="text-sm">
                v5.3 (current)
              </DropdownMenuItem>
              <DropdownMenuItem className="text-sm">v5.2</DropdownMenuItem>
              <DropdownMenuItem className="text-sm">v5.1</DropdownMenuItem>
              <DropdownMenuItem className="text-sm">v5.0</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-sm">
                All versions
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle Button */}
          <button
            className="hover:bg-[#9A6FF4] p-1.5 rounded-full"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#8954F3] text-white p-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link
              href="/docs"
              className="font-medium hover:bg-[#9A6FF4] px-2 py-1 rounded"
            >
              Docs
            </Link>
            <Link
              href="/examples"
              className="font-medium hover:bg-[#9A6FF4] px-2 py-1 rounded"
            >
              Examples
            </Link>
            <Link
              href="/icons"
              className="font-medium hover:bg-[#9A6FF4] px-2 py-1 rounded"
            >
              Icons
            </Link>
            <Link
              href="/themes"
              className="font-medium hover:bg-[#9A6FF4] px-2 py-1 rounded"
            >
              Themes
            </Link>
            <Link
              href="/blog"
              className="font-medium hover:bg-[#9A6FF4] px-2 py-1 rounded"
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
