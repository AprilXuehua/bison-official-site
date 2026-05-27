import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const SECTIONS = [
  {
    title: "제1조 (개인정보의 처리 목적)",
    content: `BISON은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

견적 요청 및 상담 서비스 제공
문의 사항 응답 및 고객 지원
서비스 개선 및 신규 서비스 개발
법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치`,
  },
  {
    title: "제2조 (개인정보의 처리 및 보유 기간)",
    content: `① BISON은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
견적 요청 정보: 견적 요청일로부터 3년
문의 내역: 문의 접수일로부터 3년`,
  },
  {
    title: "제3조 (처리하는 개인정보의 항목)",
    content: `BISON은 다음의 개인정보 항목을 처리하고 있습니다.
1. 견적 요청 및 문의
필수항목: 이름, 회사명, 연락처, 이메일
선택항목: 문의 내용, 요청사항
2. 자동 수집 정보
접속 IP 정보, 쿠키, 서비스 이용 기록`,
  },
  {
    title: "제4조 (개인정보의 제3자 제공)",
    content: `BISON은 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.`,
  },
  {
    title: "제5조 (개인정보처리의 위탁)",
    content: `① BISON은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
1. Firebase (Google LLC)
위탁업무 내용: 데이터베이스 관리 및 호스팅
보유 및 이용기간: 위탁계약 종료 시까지
2. BISHU
위탁업무 내용: 웹사이트 개발 및 유지보수
보유 및 이용기간: 위탁계약 종료 시까지

② BISON은 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.`,
  },
  {
    title: "제6조 (정보주체의 권리·의무 및 그 행사방법)",
    content: `① 정보주체는 BISON에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
개인정보 열람 요구
오류 등이 있을 경우 정정 요구
삭제 요구
처리정지 요구
② 제1항에 따른 권리 행사는 서면, 전자우편 등을 통하여 하실 수 있으며, BISON은 이에 대해 지체 없이 조치하겠습니다.
③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 BISON은 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.`,
  },
  {
    title: "제7조 (개인정보의 파기)",
    content: `① BISON은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
② 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차
이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
2. 파기방법
전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.`,
  },
  {
    title: "제8조 (개인정보의 안전성 확보 조치)",
    content: `BISON은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
개인정보 취급 직원의 최소화 및 교육
개인정보에 대한 접근 제한
개인정보를 안전하게 저장·전송할 수 있는 암호화 기술 적용
해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위한 보안 프로그램 설치
개인정보 처리시스템 접속기록의 보관 및 위변조 방지`,
  },
  {
    title: "제9조 (개인정보 보호책임자)",
    content: `① BISON은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
개인정보 보호책임자
이메일: sales@bison0507.com
② 정보주체께서는 BISON의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: "제10조 (개인정보 처리방침 변경)",
    content: `이 개인정보처리방침은 2025년 1월 1일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.

시행일자 : 2025년 1월 1일`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "var(--font-pretendard)" }}>
      {/* 헤더 */}
      <div className="relative">
        <Header />
        <div className="h-[37px] md:h-[50px] lg:h-[75px]" />
      </div>

      {/* 본문 */}
      <main className="max-w-[1920px] mx-auto
        px-5 md:px-12 lg:px-[108px]
        pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[120px] lg:pb-[160px]">

        {/* 제목 */}
        <h1
          className="text-[#1a1a1a] font-bold
            text-[28px] leading-tight tracking-[-0.5px]
            md:text-[40px] md:tracking-[-1px]
            lg:text-[60px] lg:tracking-[-2px]
            mb-5 md:mb-7 lg:mb-[50px]"
        >
          개인 정보 처리 방침
        </h1>

        {/* 부제목 */}
        <p className="text-[#1a1a1a] font-normal text-sm md:text-base lg:text-2xl
          mb-8 md:mb-12 lg:mb-[50px]">
          BISON은 고객의 개인정보를 중요시하며, 관련 법령을 준수하고 있습니다.
        </p>

        {/* 구분선 */}
        <div className="w-full h-px bg-[#1a1a1a]/20 mb-8 md:mb-12 lg:mb-[50px]" />

        {/* 조항 목록 */}
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-[48px]">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-[#1a1a1a] font-bold
                text-sm md:text-base lg:text-2xl
                mb-2 md:mb-3 lg:mb-4">
                {section.title}
              </h2>
              <p className="text-[#1a1a1a] font-normal whitespace-pre-line
                text-sm md:text-base lg:text-2xl
                leading-relaxed lg:leading-[1.8]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
