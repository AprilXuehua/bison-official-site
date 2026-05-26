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
        w-[24px] h-[24px] bottom-4 right-4
        md:w-[36px] md:h-[36px] md:bottom-6 md:right-6
        lg:w-[50px] lg:h-[50px] lg:bottom-[44px] lg:right-[44px]"
    >
      <svg
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[8px] h-[10px] md:w-[12px] md:h-[14px] lg:w-[16px] lg:h-[20px]
          group-hover:-translate-y-0.5 transition-transform"
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
