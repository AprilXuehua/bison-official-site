"use client";

import { useState } from "react";
import NewsThumbnail from "@/components/NewsThumbnail";
import type { NewsItem } from "@/lib/news";
import { formatNewsDate } from "@/lib/news";

const ITEMS_PER_PAGE = 9;

export default function NewsPagination({ news }: { news: NewsItem[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const pageItems = news.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  const goToPage = (page: number) => setCurrentPage(page);

  if (news.length === 0) {
    return (
      <p className="text-center text-[18px]" style={{ color: "#939598" }}>
        등록된 뉴스가 없습니다.
      </p>
    );
  }

  return (
    <div>
      {/* 3×3 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] lg:gap-[48px]">
        {pageItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {/* 페이지 네비게이션 */}
      {totalPages >= 1 && (
        <div className="flex items-center justify-center gap-[12px] mt-[60px]">
          {/* 이전 버튼 */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="w-[40px] h-[40px] rounded-full border-2 border-black bg-white flex items-center justify-center transition-opacity duration-200"
            style={{ opacity: currentPage === 0 ? 0.3 : 1 }}
            aria-label="이전"
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M7 2L2 8L7 14" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* 페이지 번호 */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className="w-[40px] h-[40px] rounded-full text-[15px] font-bold transition-all duration-200"
              style={{
                backgroundColor: i === currentPage ? "#3775FF" : "transparent",
                color: i === currentPage ? "white" : "black",
                border: i === currentPage ? "none" : "2px solid black",
                opacity: i === currentPage ? 1 : 0.4,
              }}
              aria-label={`${i + 1}페이지`}
            >
              {i + 1}
            </button>
          ))}

          {/* 다음 버튼 */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="w-[40px] h-[40px] rounded-full border-2 border-black bg-white flex items-center justify-center transition-opacity duration-200"
            style={{ opacity: currentPage === totalPages - 1 ? 0.3 : 1 }}
            aria-label="다음"
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M2 2L7 8L2 14" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full rounded-[18px] overflow-hidden cursor-pointer group"
      style={{ height: "240px" }}
    >
      {/* 기본 배경 (그라디언트) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3775ff] to-[#d7e3ff]" />

      {/* thumbnail 없을 때 BISON 로고 */}
      {!item.thumbnail && (
        <img
          src="/images/bison-logo.svg"
          alt="BISON"
          className="absolute"
          style={{
            left: "50%",
            top: "38%",
            transform: "translateX(-50%) translateY(-50%)",
            width: "120px",
            height: "30px",
          }}
        />
      )}

      {/* 썸네일 이미지 */}
      {item.thumbnail && (
        <NewsThumbnail src={item.thumbnail} alt={item.title} />
      )}

      {/* frosted glass 텍스트 패널 */}
      <div
        className="absolute rounded-[14px] flex flex-col gap-[6px]"
        style={{
          left: "13px",
          right: "13px",
          bottom: "13px",
          padding: "12px 14px",
          backdropFilter: "blur(9px)",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      >
        <p
          className="font-bold text-black leading-tight text-left line-clamp-1"
          style={{ fontSize: "15px", letterSpacing: "-0.84px" }}
        >
          {item.title}
        </p>
        <p className="text-black text-right whitespace-nowrap" style={{ fontSize: "12px" }}>
          {formatNewsDate(item.published_at)}
        </p>
      </div>
    </a>
  );
}
