"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MobileDrawer from './MobileDrawer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DarkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('Theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      setDarkIcon(false);
    } else {
      document.body.classList.remove('dark');
      setDarkIcon(true);
    }
  }, []);

  const TriggerTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="header sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-colors duration-300">
      {/* Reduced top and bottom padding to tight minimum: pt-1 pb-1 */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-1 pb-1 px-4 sm:px-6 leading-none">
        
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.jpeg"
              alt="Francisco Gardeners Logo"
              width={400}
              height={400}
              priority
              className="w-[100px] sm:w-[130px] h-auto object-contain block"
            />
          </Link>
        </div>

        {/* Right Navigation & Action Controls */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Main Desktop Nav Links */}
          {!showSearch && (
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                About
              </Link>
              <Link href="/services" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                Services
              </Link>
              <Link href="/feedback" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                Feedback
              </Link>
              <Link href="/team" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                Team
              </Link>
              <Link href="/contact" className="text-[15px] font-medium text-gray-700 hover:text-[#10B981] transition-colors duration-200">
                Contact
              </Link>

              <Link href="/career">
                <button className="border cursor-pointer text-[15px] font-medium border-[#0D402B] text-[#0D402B] hover:text-white rounded px-3 py-0.5 hover:bg-[#0D402B] transition-all duration-200">
                  Career
                </button>
              </Link>

              <Link href="/notice">
                <button className="bg-[#0D402B] cursor-pointer text-[15px] border border-[#0D402B] text-white px-3 py-0.5 rounded hover:bg-emerald-800 transition-all duration-200">
                  Notice
                </button>
              </Link>
            </nav>
          )}

          {/* Expandable Inline Search Input */}
          <div className="relative flex items-center">
            <div className={`hidden md:flex items-center bg-white border rounded-md shadow-sm transition-all duration-300 ease-in-out h-8 ${
              showSearch ? "w-[220px] lg:w-[320px] opacity-100 px-2" : "w-0 opacity-0 border-none p-0 overflow-hidden"
            }`}>
              <button 
                onClick={() => setShowSearch(false)} 
                className="text-gray-500 hover:text-black cursor-pointer mr-1 font-bold text-lg"
              >
                ‹
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search..."
                className="w-full border-none outline-none bg-transparent text-sm text-gray-800"
              />
            </div>

            {/* Search Icon Trigger */}
            {!showSearch && (
              <button 
                onClick={() => setShowSearch(true)} 
                className="p-1 rounded-full hover:bg-gray-100 hidden md:block transition-colors"
                aria-label="Open search"
              >
                <Image 
                  width={18} 
                  height={18} 
                  alt="search icon" 
                  src="/icons/search.svg" 
                  className="w-[18px] h-[18px] cursor-pointer"
                />
              </button>
            )}
          </div>

          {/* Mobile Notice Button */}
          <div className="sm:hidden">
            <Link href="/notice">
              <button className="bg-[#ebebeb] cursor-pointer border-[1.5px] border-[#0D402B] text-black px-3 py-0.5 rounded hover:bg-[#0D402B] hover:text-white transition-all duration-200 text-xs font-medium">
                Notice
              </button>
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <div className="hidden sm:block">
            <button
              onClick={TriggerTheme}
              aria-label="Toggle theme"
              className={`flex items-center justify-center text-base cursor-pointer rounded-full h-7 w-7 transition-transform hover:scale-105 ${
                DarkIcon
                  ? "bg-black text-white rotate-45"
                  : "bg-white text-black border border-gray-200 shadow-sm"
              }`}
            >
              {DarkIcon ? "☽" : "☀︎"}
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <MobileDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>

      </div>
    </header>
  );
};

export default Header;