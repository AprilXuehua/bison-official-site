import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message, privacy } = body;

    // 서버 측 유효성 검사
    if (!name?.trim() || !company?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "모든 필드를 입력해주세요." }, { status: 400 });
    }
    if (!privacy) {
      return NextResponse.json({ error: "개인정보방침에 동의해주세요." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "올바른 이메일 형식이 아닙니다." }, { status: 400 });
    }
    if (name.length > 50 || company.length > 50 || email.length > 100 || phone.length > 11 || message.length > 2000) {
      return NextResponse.json({ error: "입력값이 허용 길이를 초과했습니다." }, { status: 400 });
    }

    // 1. Supabase contacts 테이블에 저장
    const { error: dbError } = await supabase.from("contacts").insert({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError.message);
      return NextResponse.json({ error: "저장 중 오류가 발생했습니다." }, { status: 500 });
    }

    // 2. Resend로 이메일 발송 (API 키 있을 때만)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
      to: "april.xuehua@gmail.com", // 실제 수신자 이메일로 변경
      subject: `[BISON 문의] ${name.trim()} / ${company.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #3775FF;">새로운 문의가 접수되었습니다.</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold; width: 100px;">이름</td>
              <td style="padding: 10px;">${name.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold;">회사명</td>
              <td style="padding: 10px;">${company.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold;">이메일</td>
              <td style="padding: 10px;">${email.trim()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; font-weight: bold;">연락처</td>
              <td style="padding: 10px;">${phone.trim()}</td>
            </tr>
          </table>
          <h3 style="margin-bottom: 8px;">문의내용</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message.trim()}</p>
        </div>
      `,
    });

      if (emailError) {
        console.error("Resend email error:", emailError.message);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
