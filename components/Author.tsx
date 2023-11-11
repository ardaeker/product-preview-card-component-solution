"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Author() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 z-50 flex w-full justify-between  bg-gray-900/90 p-4",
        !isOpen && "hidden",
      )}
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-xs font-normal text-white sm:text-base">
          <span>
            Challenge by&nbsp;
            <a
              href="https://www.frontendmentor.io"
              target="_blank"
              className="decoration-600  inline font-medium text-gray-300 underline decoration-solid underline-offset-2 hover:no-underline "
            >
              Frontend Mentor
            </a>
            . Coded by&nbsp;
            <a
              href="https://www.frontendmentor.io/profile/ardaeker"
              target="_blank"
              className="decoration-600 inline font-medium text-gray-300 underline decoration-solid underline-offset-2 hover:no-underline "
            >
              Arda Eker
            </a>
            .
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-white transition-colors duration-200 hover:bg-white hover:text-gray-900 md:h-7 md:w-7"
        >
          <svg
            className="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
