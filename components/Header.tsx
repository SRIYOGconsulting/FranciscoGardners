"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState, useRef, useMemo } from "react";

interface SearchItem {
  title: string;
  href: string;
  category: "Page" | "Service" | "Company";
  description: string;
  keywords: string[];
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    title: "Home",
    href: "/",
    category: "Page",
    description: "Francisco Gardeners homepage and overview.",
    keywords: ["home", "main", "gardeners", "francisco", "start"],
  },
  {
    title: "About Us",
    href: "/about",
    category: "Company",
    description: "Our story, mission, and gardening standards.",
    keywords: ["about", "story", "mission", "who we are", "history"],
  },
  {
    title: "Services",
    href: "/services",
    category: "Service",
    description: "Landscaping, lawn care, pruning, and garden maintenance.",
    keywords: [
      "services",
      "landscaping",
      "lawn",
      "mowing",
      "pruning",
      "trimming",
      "garden care",
      "maintenance",
      "planting",
      "soil",
    ],
  },
  {
    title: "Feedback",
    href: "/feedback",
    category: "Page",
    description: "Share reviews, suggestions, or experience with us.",
    keywords: ["feedback", "review", "rating", "testimonial", "suggestions"],
  },
  {
    title: "Team",
    href: "/team",
    category: "Company",
    description: "Meet the horticulturists and gardeners behind our work.",
    keywords: ["team", "staff", "gardeners", "people", "experts", "crew"],
  },
  {
    title: "Contact",
    href: "/contact",
    category: "Page",
    description: "Get a quote, ask a question, or reach our support team.",
    keywords: ["contact", "quote", "email", "phone", "address", "location", "support"],
  },
  {
    title: "Career",
    href: "/career",
    category: "Company",
    description: "Open roles and opportunities to join our gardening crew.",
    keywords: ["career", "careers", "jobs", "hiring", "work", "apply", "positions"],
  },
  {
    title: "Notice",
    href: "/notice",
    category: "Page",
    description: "Announcements, seasonal updates, and important notices.",
    keywords: ["notice", "notices", "news", "announcements", "updates", "alerts"],
  },
];

const Header = () => {
  const [darkIcon, setDarkIcon] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenuPopup, setShowMenuPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const popupRef = useRef<HTMLDivElement>(null);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      setDarkIcon(false);
    } else {
      document.documentElement.classList.remove("dark");
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
      const target = e.target as Node;

      if (popupRef.current && !popupRef.current.contains(target)) {
        setShowMenuPopup(false);
      }

      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(target)
      ) {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSearch && desktopInputRef.current) {
      desktopInputRef.current.focus();
    }
  }, [showSearch]);

  const trimmedQuery = searchQuery.trim().toLowerCase();

  const matches = useMemo(() => {
    if (!trimmedQuery) return [];

    return SEARCH_ITEMS.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(trimmedQuery);
      const inDesc = item.description.toLowerCase().includes(trimmedQuery);
      const inCategory = item.category.toLowerCase().includes(trimmedQuery);
      const inKeywords = item.keywords.some((kw) =>
        kw.toLowerCase().includes(trimmedQuery)
      );
      return inTitle || inDesc || inCategory || inKeywords;
    });
  }, [trimmedQuery]);

  const triggerTheme = () => {
    const isDark =
      document.body.classList.contains("dark") ||
      document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("Theme", "light");
      setDarkIcon(true);
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("Theme", "dark");
      setDarkIcon(false);
    }
  };

  const navigateToResult = (href: string) => {
    router.push(href);
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (trimmedQuery === "") return;

    const exactMatch = matches.find(
      (item) => item.title.toLowerCase() === trimmedQuery
    );

    if (exactMatch) {
      navigateToResult(exactMatch.href);
    } else {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
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
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-100 dark:border-neutral-800 transition-colors duration-300 overflow-visible">
        {/* Header Container */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 gap-2 h-20 overflow-visible">
          {/* Logo */}
          <Link href="/" className="flex items-center self-center shrink-0">
            <img
              src="/logo/logo2.png"
              alt="Francisco Gardeners Logo"
              className="h-12 w-36 sm:h-14 sm:w-48 object-contain block dark:brightness-110"
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 shrink-0">
            {/* Desktop Navigation */}
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
                          ? "text-teal-900 dark:text-emerald-400 font-semibold"
                          : "text-gray-700 dark:text-gray-300 hover:text-teal-800 dark:hover:text-emerald-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Link href="/career">
                  <button className="border cursor-pointer text-[14px] font-medium border-teal-900 dark:border-emerald-400 text-teal-900 dark:text-emerald-300 hover:text-white rounded px-3.5 py-1 hover:bg-teal-900 dark:hover:bg-emerald-600 transition-all duration-200">
                    Career
                  </button>
                </Link>

                <Link href="/notice">
                  <button className="bg-teal-900 dark:bg-emerald-700 cursor-pointer text-[14px] font-medium border border-teal-900 dark:border-emerald-700 text-white px-3.5 py-1 rounded hover:bg-teal-800 dark:hover:bg-emerald-600 transition-all duration-200">
                    Notice
                  </button>
                </Link>
              </nav>
            )}

            {/* Desktop Live Search */}
            <div ref={desktopSearchRef} className="relative hidden lg:block">
              <form
                onSubmit={handleSearch}
                className={`flex items-center bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md shadow-sm transition-all duration-300 ease-in-out h-9 ${
                  showSearch
                    ? "w-[320px] opacity-100 px-2.5"
                    : "w-0 opacity-0 border-none p-0 overflow-hidden pointer-events-none"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                  aria-label="Close search"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer mr-1.5 font-bold text-lg leading-none"
                >
                  ‹
                </button>

                <input
                  ref={desktopInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, services, notices..."
                  className="w-full border-none outline-none bg-transparent text-sm text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xs px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </form>

              {/* Desktop Live Results Dropdown */}
              {showSearch && trimmedQuery.length > 0 && (
                <div className="absolute right-0 mt-2 w-[360px] bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700 overflow-hidden z-50">
                  <div className="px-3.5 py-2 bg-gray-50 dark:bg-neutral-800 border-b border-gray-100 dark:border-neutral-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      {matches.length > 0
                        ? `Found ${matches.length} ${
                            matches.length === 1 ? "match" : "matches"
                          } on site`
                        : "No matches found on site"}
                    </span>
                    <span className="font-medium text-teal-900 dark:text-emerald-400">
                      "{searchQuery.trim()}"
                    </span>
                  </div>

                  {matches.length > 0 ? (
                    <ul className="max-h-72 overflow-y-auto divide-y divide-gray-100 dark:divide-neutral-800">
                      {matches.map((item) => (
                        <li key={item.href}>
                          <button
                            type="button"
                            onClick={() => navigateToResult(item.href)}
                            className="w-full text-left px-3.5 py-2.5 hover:bg-teal-50/70 dark:hover:bg-neutral-800 transition-colors cursor-pointer block"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {item.title}
                              </span>
                              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-teal-100 dark:bg-emerald-950 text-teal-900 dark:text-emerald-300 shrink-0">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-5 text-center">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Not found on this website
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Try searching for Services, Team, Career, Notice, or
                        Contact.
                      </p>
                    </div>
                  )}

                  <div className="px-3.5 py-2 bg-gray-50 dark:bg-neutral-800 border-t border-gray-100 dark:border-neutral-700 flex justify-between items-center">
                    <span className="text-[11px] text-gray-400">
                      Press Enter for full search
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSearch()}
                      className="text-xs font-medium text-teal-900 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      Search all →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Icon */}
            {!showSearch && (
              <button
                onClick={() => {
                  setShowMenuPopup(false);
                  setShowSearch(true);
                }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
                aria-label="Open search"
              >
                <img
                  alt="search icon"
                  src="/icons/search.svg"
                  className="w-[18px] h-[18px] block dark:invert"
                />
              </button>
            )}

            {/* Theme Toggle */}
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

            {/* Mobile Menu */}
            <div className="relative lg:hidden shrink-0" ref={popupRef}>
              <button
                onClick={() => {
                  setShowSearch(false);
                  setShowMenuPopup((prev) => !prev);
                }}
                aria-expanded={showMenuPopup}
                aria-label="Toggle navigation popup"
                className="flex items-center gap-1.5 bg-teal-900 dark:bg-emerald-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-3.5 py-2 rounded-md shadow-sm hover:bg-teal-800 dark:hover:bg-emerald-600 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{showMenuPopup ? "Close ✕" : "Menu ☰"}</span>
              </button>

              {/* Floating Popup */}
              {showMenuPopup && (
                <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700 p-3 z-50">
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
                              ? "bg-teal-50 dark:bg-emerald-950 text-teal-900 dark:text-emerald-300 font-semibold"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-200 dark:border-neutral-700 my-2.5 pt-2.5 grid grid-cols-2 gap-2">
                    <Link
                      href="/career"
                      onClick={() => setShowMenuPopup(false)}
                      className="text-center border border-teal-900 dark:border-emerald-400 text-teal-900 dark:text-emerald-300 hover:bg-teal-900 dark:hover:bg-emerald-600 hover:text-white text-xs font-medium py-1.5 rounded-md transition-colors"
                    >
                      Career
                    </Link>

                    <Link
                      href="/notice"
                      onClick={() => setShowMenuPopup(false)}
                      className="text-center bg-teal-900 dark:bg-emerald-700 text-white hover:bg-teal-800 dark:hover:bg-emerald-600 text-xs font-medium py-1.5 rounded-md transition-colors"
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

      {/* Mobile/Tablet Search Modal with Live Results */}
      {showSearch && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-xs flex items-start justify-center pt-20 px-4"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white dark:bg-neutral-900 w-full max-w-md rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Search Site
              </span>

              <button
                onClick={() => {
                  setShowSearch(false);
                  setSearchQuery("");
                }}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl leading-none cursor-pointer"
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
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-teal-900 dark:focus:border-emerald-400"
              />

              <button
                type="submit"
                className="bg-teal-900 dark:bg-emerald-700 hover:bg-teal-800 dark:hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {trimmedQuery.length > 0 && (
              <div className="mt-3 border-t border-gray-100 dark:border-neutral-800 pt-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {matches.length > 0
                    ? `On this website (${matches.length}):`
                    : `No matches found for "${searchQuery.trim()}"`}
                </p>

                {matches.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-100 dark:divide-neutral-800 rounded-lg border border-gray-100 dark:border-neutral-800">
                    {matches.map((item) => (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() => navigateToResult(item.href)}
                          className="w-full text-left px-3 py-2.5 hover:bg-teal-50/70 dark:hover:bg-neutral-800 transition-colors cursor-pointer block"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                              {item.title}
                            </span>
                            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-teal-100 dark:bg-emerald-950 text-teal-900 dark:text-emerald-300 shrink-0">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {item.description}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-lg bg-gray-50 dark:bg-neutral-800 p-3 text-xs text-gray-600 dark:text-gray-300">
                    This term does not match any section in the current site
                    index. Try searching <span className="font-medium">Services</span>,{" "}
                    <span className="font-medium">Career</span>, or{" "}
                    <span className="font-medium">Notice</span>.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;