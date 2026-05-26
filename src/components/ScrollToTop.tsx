"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 가기"
      className="fixed z-50 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all group
        w-[60px] h-[60px] bottom-6 right-5
        md:w-[90px] md:h-[90px] md:bottom-10 md:right-8
        lg:w-[150px] lg:h-[150px] lg:bottom-[100px] lg:right-[88px]"
    >
      <svg
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-6 md:w-7 md:h-8 lg:w-10 lg:h-12
          group-hover:-translate-y-1 transition-transform"
      >
        <path
          d="M20 45V5M20 5L4 21M20 5L36 21"
          stroke="#1a1a1a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
