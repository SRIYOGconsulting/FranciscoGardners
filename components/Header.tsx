"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const [darkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkIcon(false);
    } else {
      document.body.classList.remove("dark");
      setDarkIcon(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setShowMenuPopup(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowMenuPopup(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const triggerTheme = () => {
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

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Feedback", href: "/feedback" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3.5 px-4 sm:px-8 gap-2">
         {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 p-0">
            <img
              src="/logo/logo.png"
              alt="Francisco Gardeners Logo"
              className="h-[55px] w-auto object-contain block scale-125 origin-left"
            />
          </Link>

          {/* Right Side: Navigation Links + Controls */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 shrink-0">
            {/* Desktop Inline Nav (lg+) */}
            {!showSearch && (
              <nav className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-[15px] font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-teal-900 font-semibold"
                          : "text-gray-700 hover:text-teal-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Link href="/career">
                  <button className="border cursor-pointer text-[14px] font-medium border-teal-900 text-teal-900 hover:text-white rounded px-3.5 py-1 hover:bg-teal-900 transition-all duration-200">
                    Career
                  </button>
                </Link>

                <Link href="/notice">
                  <button className="bg-teal-900 cursor-pointer text-[14px] font-medium border border-teal-900 text-white px-3.5 py-1 rounded hover:bg-teal-800 transition-all duration-200">
                    Notice
                  </button>
                </Link>
              </nav>
            )}

            {/* Desktop Expandable Search (lg+) */}
            <form
              onSubmit={handleSearch}
              className={`hidden lg:flex items-center bg-gray-50 border border-gray-300 rounded-md shadow-sm transition-all duration-300 ease-in-out h-9 ${
                showSearch
                  ? "w-[300px] opacity-100 px-2.5"
                  : "w-0 opacity-0 border-none p-0 overflow-hidden"
              }`}
            >
              <button
                type="button"
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-gray-900 cursor-pointer mr-1.5 font-bold text-lg leading-none"
              >
                ‹
              </button>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full border-none outline-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400"
              />
            </form>

            {/* Search Icon Button */}
            {!showSearch && (
              <button
                onClick={() => {
                  setShowMenuPopup(false);
                  setShowSearch(true);
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                aria-label="Open search"
              >
                <img
                  alt="search icon"
                  src="/icons/search.svg"
                  className="w-[18px] h-[18px] block"
                />
              </button>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={triggerTheme}
              aria-label="Toggle theme"
              className={`flex items-center justify-center text-sm cursor-pointer rounded-full h-8 w-8 shrink-0 transition-transform hover:scale-105 ${
                darkIcon
                  ? "bg-black text-white rotate-45"
                  : "bg-white text-black border border-gray-200 shadow-sm"
              }`}
            >
              {darkIcon ? "☽" : "☀︎"}
            </button>

            {/* Responsive Popup Menu Button (< lg) */}
            <div className="relative lg:hidden shrink-0" ref={popupRef}>
              <button
                onClick={() => {
                  setShowSearch(false);
                  setShowMenuPopup((prev) => !prev);
                }}
                aria-expanded={showMenuPopup}
                aria-label="Toggle navigation popup"
                className="flex items-center gap-1.5 bg-teal-900 text-white text-xs sm:text-sm font-medium px-3 sm:px-3.5 py-2 rounded-md shadow-sm hover:bg-teal-800 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{showMenuPopup ? "Close ✕" : "Menu ☰"}</span>
              </button>

              {/* Floating Popup Card with All Links */}
              {showMenuPopup && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-50">
                  <div className="flex flex-col space-y-1">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setShowMenuPopup(false)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-teal-50 text-teal-900 font-semibold"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-200 my-2.5 pt-2.5 grid grid-cols-2 gap-2">
                    <Link
                      href="/career"
                      onClick={() => setShowMenuPopup(false)}
                      className="text-center border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white text-xs font-medium py-1.5 rounded-md transition-colors"
                    >
                      Career
                    </Link>
                    <Link
                      href="/notice"
                      onClick={() => setShowMenuPopup(false)}
                      className="text-center bg-teal-900 text-white hover:bg-teal-800 text-xs font-medium py-1.5 rounded-md transition-colors"
                    >
                      Notice
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Search Popup Modal (< lg) */}
      {showSearch && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-xl shadow-xl border border-gray-200 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">
                Search Site
              </span>
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-400 hover:text-gray-700 text-xl leading-none cursor-pointer"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type what you're looking for..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-teal-900"
              />
              <button
                type="submit"
                className="bg-teal-900 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;