"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/news";
import { formatNewsDate } from "@/lib/news";

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 330;
const CARD_GAP = 48;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const VISIBLE_WIDTH = VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;

export default function NewsSection({ news }: { news: NewsItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, news.length - VISIBLE_CARDS);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section
      className="w-full bg-white"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <div
        className="max-w-[1750px] mx-auto text-center
        px-5 md:px-12 lg:px-[85px]
        pt-[50px] md:pt-[65px] lg:pt-[51px]
        pb-[80px] md:pb-[120px] lg:pb-[51px]"
      >
        {/* 섹션 라벨 */}
        <p
          className="font-normal
            text-[13px] md:text-[18px] lg:text-[24px]
            mb-2 md:mb-2 lg:mb-3"
          style={{ color: "#3775FF", letterSpacing: "-0.05em" }}
        >
          NEWS
        </p>

        {/* 섹션 타이틀 */}
        <h2
          className="text-black font-bold
            text-[22px] md:text-[32px] lg:text-[36px]
            leading-tight
            mb-[32px] lg:mb-[51px]"
          style={{ letterSpacing: "-0.05em" }}
        >
          BISON의 최신 소식을 전달해 드립니다.
        </h2>

        {news.length === 0 ? (
          <p className="text-gray-400 text-[16px]">등록된 뉴스가 없습니다.</p>
        ) : (
          <>
            {/* 카드 캐러셀 - 데스크탑 */}
            <div className="hidden lg:flex items-center justify-center gap-[48px]">
              {/* 이전 버튼 */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-[48px] h-[48px] rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 transition-opacity duration-200"
                style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
                aria-label="이전"
              >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path
                    d="M9 2L2 11L9 20"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* 슬라이더 */}
              <div className="overflow-hidden" style={{ width: `${VISIBLE_WIDTH}px` }}>
                <div
                  className="flex gap-[48px] transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * CARD_STEP}px)` }}
                >
                  {news.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex-shrink-0 rounded-[18px] overflow-hidden cursor-pointer block"
                      style={{ width: `${CARD_WIDTH}px`, height: "240px" }}
                    >
                      <NewsCard item={item} />
                    </a>
                  ))}
                </div>
              </div>

              {/* 다음 버튼 */}
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="w-[48px] h-[48px] rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 transition-opacity duration-200"
                style={{ opacity: currentIndex === maxIndex ? 0.3 : 1 }}
                aria-label="다음"
              >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path
                    d="M2 2L9 11L2 20"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* 카드 - 모바일/태블릿 */}
            <div className="lg:hidden flex flex-col items-center gap-4">
              {news.slice(0, 3).map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full max-w-[320px] h-[200px] rounded-[14px] overflow-hidden block"
                >
                  <NewsCard item={item} />
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <>
      {/* 기본 배경 (그라디언트) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3775ff] to-[#d7e3ff]" />

      {/* thumbnail 없을 때 BISON 로고 */}
      {!item.thumbnail && (
        <img
          src="/images/bison-logo.svg"
          alt="BISON"
          className="absolute"
          style={{ left: "50%", top: "38%", transform: "translateX(-50%) translateY(-50%)", width: "120px", height: "30px" }}
        />
      )}

      {/* thumbnail 이미지 */}
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      )}

      {/* frosted glass + 텍스트 영역 */}
      <div className="absolute" style={{ left: "7px", top: "142px", width: "calc(100% - 14px)" }}>
        <div
          className="absolute rounded-[14px]"
          style={{
            left: "6px",
            right: "6px",
            top: "6px",
            height: "79px",
            backdropFilter: "blur(9px)",
            backgroundColor: "rgba(255,255,255,0.3)",
          }}
        />
        <p
          className="absolute font-bold text-black leading-tight"
          style={{
            left: "20px",
            top: "27px",
            right: "90px",
            fontSize: "17px",
            letterSpacing: "-0.84px",
          }}
        >
          {item.title}
        </p>
        <p
          className="absolute text-black"
          style={{
            right: "20px",
            top: "51px",
            fontSize: "12px",
            whiteSpace: "nowrap",
          }}
        >
          {formatNewsDate(item.published_at)}
        </p>
      </div>
    </>
  );
}
