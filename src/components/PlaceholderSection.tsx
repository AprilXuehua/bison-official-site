export default function PlaceholderSection() {
  return (
    <section
      className="w-full flex items-center justify-center
        h-[1200px] md:h-[1800px] lg:h-[2730px]"
      style={{ backgroundColor: "rgba(217, 217, 217, 0.5)" }}
    >
      <span
        className="text-white text-2xl md:text-3xl lg:text-[40px] font-normal select-none"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        임시컨테이너
      </span>
    </section>
  );
}
