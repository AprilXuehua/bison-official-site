import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BISON — 예측하기 어려운 제조 환경까지 학습하는 AI",
  description:
    "우리는 정제된 데이터만 학습하지 않습니다. 실제 제조 현장의 복잡한 변수까지 학습합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-[#1a1a1a]">{children}</body>
    </html>
  );
}
