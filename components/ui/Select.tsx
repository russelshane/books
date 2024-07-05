"use client";
import React, { useState } from "react";

export function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-6 pb-8">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-gray bg-none border-smoke border-2 focus:outline-none focus:ring-blue-300 min-w-64 font-medium rounded-sm text-sm inline-flex items-center justify-between"
          onClick={toggleDropdown}
        >
          All Books{" "}
          <svg
            className="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 min-w-64 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200"
                  onClick={closeDropdown}
                >
                  All Books
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
