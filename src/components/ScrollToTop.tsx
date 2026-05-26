"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="맨 위로 가기"
      className="fixed bottom-[100px] right-[88px] z-50 w-[150px] h-[150px] rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors group"
    >
      {/* 위쪽 화살표 */}
      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:-translate-y-1 transition-transform"
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
