"use client";

import { useState, useEffect } from "react";

const STEPS = [
  "적용 산업",
  "공정 세분화",
  "구축 형태",
  "검사 영역",
  "검사 시간",
  "검사 항목",
  "검사 한도",
  "제품 크기",
  "설치 공간",
  "기존 검사원 수",
];

type StepOption = { label: string; image: string | null };
type StepConfig = { cols: number; options: StepOption[] };

const STEP_0: StepConfig = {
  cols: 2,
  options: [
    { label: "자동차", image: "https://www.figma.com/api/mcp/asset/a5ed39a3-677b-47c3-aeb1-7d9117df8110" },
    { label: "2차전지", image: "https://www.figma.com/api/mcp/asset/17e890dd-16dc-48e3-b672-40c72bc36d56" },
    { label: "에너지", image: "https://www.figma.com/api/mcp/asset/914f44e3-d3b4-4033-a45a-46cb249c5103" },
    { label: "철강", image: "https://www.figma.com/api/mcp/asset/5f6530e5-04e3-4182-9ca0-081df6aff085" },
  ],
};

const STEP_2: StepConfig = {
  cols: 2,
  options: [
    { label: "인라인", image: null },
    { label: "검사설비", image: null },
    { label: "로봇비전", image: null },
    { label: "CCTV 관제 및 검사", image: null },
  ],
};

const STEP_3: StepConfig = {
  cols: 2,
  options: [
    { label: "1면", image: null },
    { label: "2면", image: null },
    { label: "4면", image: null },
    { label: "전면", image: null },
  ],
};

const STEP_4: StepConfig = {
  cols: 2,
  options: [
    { label: "0.5초 이하", image: null },
    { label: "1.5초 이하", image: null },
    { label: "3초 이하", image: null },
    { label: "10초 이상", image: null },
  ],
};

const STEP_5: StepConfig = {
  cols: 2,
  options: [
    { label: "외관검사", image: null },
    { label: "치수측정", image: null },
    { label: "OCR 및 바코드", image: null },
    { label: "얼라인", image: null },
  ],
};

const STEP_6: StepConfig = {
  cols: 2,
  options: [
    { label: "0.1mm 이하", image: null },
    { label: "0.1~0.5mm", image: null },
    { label: "0.5~1mm 이하", image: null },
    { label: "1cm 이상", image: null },
  ],
};

const STEP_7: StepConfig = {
  cols: 2,
  options: [
    { label: "30*30 이하", image: null },
    { label: "50*50 이하", image: null },
    { label: "100*100 이하", image: null },
    { label: "150*150 이하", image: null },
  ],
};

const STEP_8: StepConfig = {
  cols: 2,
  options: [
    { label: "500mm", image: null },
    { label: "1000mm", image: null },
    { label: "1500mm", image: null },
    { label: "2000mm", image: null },
  ],
};

const STEP_9: StepConfig = {
  cols: 2,
  options: [
    { label: "1명", image: null },
    { label: "2명", image: null },
    { label: "5명 이내", image: null },
    { label: "10명 이내", image: null },
  ],
};

const STEP_1_OPTIONS: Record<string, StepConfig> = {
  "자동차": {
    cols: 3,
    options: [
      { label: "완제품", image: null },
      { label: "대형부품", image: null },
      { label: "소형부품", image: null },
    ],
  },
  "2차전지": {
    cols: 3,
    options: [
      { label: "원통형", image: null },
      { label: "각형", image: null },
      { label: "파우치", image: null },
    ],
  },
  "에너지": {
    cols: 2,
    options: [
      { label: "태양광", image: null },
      { label: "전기", image: null },
    ],
  },
  "철강": {
    cols: 2,
    options: [
      { label: "냉연", image: null },
      { label: "열연", image: null },
    ],
  },
};

function StepIcon({ status }: { status: "done" | "current" | "pending" }) {
  if (status === "done") {
    return (
      <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#3775ff] flex items-center justify-center flex-shrink-0">
        <svg width="8" height="7" viewBox="0 0 14 11" fill="none">
          <path d="M1 5.5L5.5 10L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] rounded-full border-[2px] border-[#3775ff] flex items-center justify-center flex-shrink-0">
        <div className="w-[5px] h-[5px] lg:w-[7px] lg:h-[7px] rounded-full bg-[#3775ff]" />
      </div>
    );
  }
  return (
    <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] rounded-full border-[2px] border-[#c2c2c2] flex-shrink-0" />
  );
}

function OptionCard({
  opt,
  selected,
  onClick,
  height,
  textSize,
}: {
  opt: StepOption;
  selected: boolean;
  onClick: () => void;
  height: number;
  textSize: string;
}) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[10px] lg:rounded-[14px] overflow-hidden w-full transition-all duration-200"
      style={{ height, outline: selected ? "3px solid #3775ff" : "none" }}
    >
      {opt.image ? (
        <img src={opt.image} alt={opt.label} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[#d0d0d0]" />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <span className={`absolute inset-0 flex items-center justify-center text-white font-black ${textSize}`}>
        {opt.label}
      </span>
    </button>
  );
}

const MULTI_SELECT_STEPS = new Set([5]);

export default function EstimateWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<number, string | string[]>>({});

  const step: StepConfig | undefined =
    currentStep === 0 ? STEP_0 :
    currentStep === 1 ? STEP_1_OPTIONS[selections[0] as string] :
    currentStep === 2 ? STEP_2 :
    currentStep === 3 ? STEP_3 :
    currentStep === 4 ? STEP_4 :
    currentStep === 5 ? STEP_5 :
    currentStep === 6 ? STEP_6 :
    currentStep === 7 ? STEP_7 :
    currentStep === 8 ? STEP_8 :
    currentStep === 9 ? STEP_9 :
    undefined;
  const isPlaceholder = !step;
  const isMulti = MULTI_SELECT_STEPS.has(currentStep);
  const rawSelection = selections[currentStep];
  const selectedMulti: string[] = isMulti ? (rawSelection as string[] ?? []) : [];
  const selectedSingle: string | null = !isMulti ? (rawSelection as string ?? null) : null;
  const hasSelection = isMulti ? selectedMulti.length > 0 : selectedSingle !== null;

  const handleSelect = (label: string) => {
    if (isMulti) {
      setSelections((prev) => {
        const current = (prev[currentStep] as string[]) ?? [];
        const next = current.includes(label)
          ? current.filter((v) => v !== label)
          : [...current, label];
        return { ...prev, [currentStep]: next };
      });
    } else {
      setSelections((prev) => ({ ...prev, [currentStep]: label }));
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleNext = () => {
    if (!hasSelection) return;
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const gridCols = step?.cols === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <div className="w-full" style={{ fontFamily: "var(--font-pretendard)" }}>

      {/* ① 타이틀 영역 */}
      <div className="px-4 md:px-8 lg:px-[150px] pt-[48px] lg:pt-[80px] pb-[24px] lg:pb-[60px]">
        <p className="text-black font-bold text-[26px] lg:text-[40px] leading-tight mb-[6px] lg:mb-[10px]">
          예상견적
        </p>
        <p className="text-black text-[13px] lg:text-[18px] font-normal tracking-[-0.5px]">
          간단한 클릭 몇 번이면 하루 이내로 H/W 사양과 견적, 투자 회수 기간을 확인할 수 있습니다.
        </p>
      </div>

      {/* ② 사이드바 + ③ 선택지 영역 */}
      <div className="flex pt-[36px] lg:pt-[60px] pb-[80px] lg:pb-[160px]">

        {/* ② 사이드바 영역 — sticky로 헤더 아래 고정 */}
        <div className="hidden lg:flex flex-col self-start sticky top-[95px] pl-[150px] pr-[28px] flex-shrink-0 min-w-[340px] max-h-[calc(100vh-110px)] overflow-y-auto">
          <div className="flex flex-col gap-[16px]">
            {STEPS.map((stepLabel, i) => {
              const status = i < currentStep ? "done" : i === currentStep ? "current" : "pending";
              return (
                <div key={stepLabel} className="flex items-center gap-[10px]">
                  <StepIcon status={status} />
                  <span
                    className="text-[13px] leading-tight"
                    style={{
                      color: status === "done" ? "#3775ff" : status === "current" ? "#000" : "#939598",
                      fontWeight: status === "pending" ? 400 : 700,
                    }}
                  >
                    {stepLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 구분선 */}
        <div className="hidden lg:block w-[1px] bg-[#e0e0e0] self-stretch flex-shrink-0" />

        {/* ③ 선택지 영역 */}
        <div className="flex-1 flex justify-center items-start px-4 lg:px-0">
          <div className="w-full lg:w-[800px] flex flex-col min-h-[330px] lg:min-h-[680px]">

            {isPlaceholder ? (
              <div className="flex items-center justify-center h-[200px] lg:h-[300px] rounded-[10px] lg:rounded-[14px] border border-[#e0e0e0]">
                <p className="text-[#939598] text-[16px] lg:text-[20px] font-bold">준비 중입니다.</p>
              </div>
            ) : (
              <>
                {isMulti && (
                  <p className="text-[#3775ff] text-[13px] lg:text-[15px] font-bold mb-[10px] lg:mb-[14px]">
                    * 다중 선택이 가능합니다.
                  </p>
                )}
                {/* 데스크탑 카드 */}
                <div className="hidden lg:block">
                  <div className={`grid ${gridCols} gap-[14px]`}>
                    {step.options.map((opt) => (
                      <OptionCard
                        key={opt.label}
                        opt={opt}
                        selected={isMulti ? selectedMulti.includes(opt.label) : selectedSingle === opt.label}
                        onClick={() => handleSelect(opt.label)}
                        height={300}
                        textSize="text-[18px] lg:text-[24px]"
                      />
                    ))}
                  </div>
                </div>
                {/* 모바일 카드 */}
                <div className="block lg:hidden">
                  <div className={`grid ${gridCols} gap-[10px]`}>
                    {step.options.map((opt) => (
                      <OptionCard
                        key={opt.label}
                        opt={opt}
                        selected={isMulti ? selectedMulti.includes(opt.label) : selectedSingle === opt.label}
                        onClick={() => handleSelect(opt.label)}
                        height={160}
                        textSize="text-[18px]"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* 페이지 표시 + 이전/다음 버튼 */}
            <div className="relative flex items-center justify-end gap-[8px] lg:gap-[12px] mt-[16px] lg:mt-[28px]">
              {currentStep < 10 && (
                <span className="absolute left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] font-bold text-[#939598]">
                  {currentStep + 1}/10
                </span>
              )}
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-[8px] lg:gap-[10px] border border-[#3775ff] text-[#3775ff] font-bold text-[14px] lg:text-[16px] rounded-[30px] px-[18px] lg:px-[24px] py-[9px] lg:py-[12px] transition-opacity disabled:opacity-0 disabled:pointer-events-none"
              >
                <svg width="14" height="11" viewBox="0 0 20 14" fill="none">
                  <path d="M19 7H1M7 1L1 7L7 13" stroke="#3775ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                이전
              </button>
              {!isPlaceholder && (
                <button
                  onClick={handleNext}
                  disabled={!hasSelection}
                  className="flex items-center gap-[8px] lg:gap-[10px] bg-[#3775ff] text-white font-bold text-[14px] lg:text-[16px] rounded-[30px] px-[18px] lg:px-[24px] py-[9px] lg:py-[12px] transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {currentStep === 9 ? "예상견적보기" : "다음"}
                  <svg width="14" height="11" viewBox="0 0 20 14" fill="none">
                    <path d="M1 7H19M13 1L19 7L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
