"use client";

import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 제출 로직 연동
    console.log("문의 제출:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[#c2c2c2] rounded-[24px] flex items-center justify-center min-h-[400px]">
        <div className="text-center px-8">
          <p
            className="text-black font-bold mb-3"
            style={{ fontSize: "24px" }}
          >
            문의가 접수되었습니다.
          </p>
          <p style={{ fontSize: "16px", color: "#939598" }}>
            빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#c2c2c2] rounded-[24px] px-[24px] md:px-[38px] lg:px-[51px] pt-[32px] lg:pt-[44px] pb-[32px] lg:pb-[44px]"
      style={{ fontFamily: "var(--font-pretendard)" }}
    >
      <div className="flex flex-col gap-[18px] lg:gap-[21px]">
        <InputField
          label="이름"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
          maxLength={50}
        />
        <InputField
          label="회사명"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="회사명을 입력하세요"
          maxLength={50}
        />
        <InputField
          label="이메일"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@company.com"
          maxLength={100}
        />
        <InputField
          label="연락처"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="01012345678 (숫자만 입력)"
          maxLength={11}
        />
        <div className="flex flex-col gap-[3px]">
          <label
            className="text-black font-normal"
            style={{ fontSize: "18px" }}
            htmlFor="message"
          >
            문의내용<span style={{ color: "#ff0004" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="문의하실 내용을 자세히 입력해주세요"
            maxLength={2000}
            className="rounded-[9px] border border-[#c2c2c2] px-[16px] py-[14px] text-black outline-none focus:border-[#3775ff] transition-colors resize-none"
            style={{ fontSize: "16px", height: "272px" }}
          />
        </div>
      </div>

      {/* 개인정보 동의 + 제출 버튼 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-[24px]">
        <label className="flex items-start gap-[10px] cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            required
            className="mt-[2px] flex-shrink-0 accent-[#3775ff]"
            style={{ width: "18px", height: "18px" }}
          />
          <span style={{ fontSize: "11px", color: "#333" }}>
            <strong>
              (필수){" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70 transition-opacity"
              >
                개인정보방침
              </a>
              에 동의합니다.
            </strong>
            <br />
            <span style={{ color: "#666" }}>
              수집된 개인정보는 문의 응답 목적으로만 사용되며, 관련 법령에 따라 적절히 관리됩니다.
            </span>
          </span>
        </label>
        <button
          type="submit"
          className="flex-shrink-0 text-white font-normal hover:opacity-80 transition-opacity"
          style={{
            backgroundColor: "#3775FF",
            borderRadius: "30px",
            padding: "0 24px",
            height: "36px",
            fontSize: "18px",
          }}
        >
          제출하기
        </button>
      </div>
    </form>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-[3px]">
      <label
        className="text-black font-normal"
        style={{ fontSize: "18px" }}
        htmlFor={name}
      >
        {label}
        <span style={{ color: "#ff0004" }}>*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        maxLength={maxLength}
        className="rounded-[9px] border border-[#c2c2c2] px-[16px] text-black outline-none focus:border-[#3775ff] transition-colors"
        style={{ height: "60px", fontSize: "16px" }}
      />
    </div>
  );
}
