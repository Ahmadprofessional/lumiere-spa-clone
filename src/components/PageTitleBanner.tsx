export function PageTitleBanner({ title }: { title: string }) {
  return (
    <div
      className="flex min-h-[350px] items-center justify-center bg-cover bg-[0%_75%] px-6 py-20"
      style={{ backgroundImage: "url(/images/footer-bg-gold.jpg)" }}
    >
      <h1 className="font-heading text-[45px] font-semibold text-[#D09F47]">{title}</h1>
    </div>
  );
}
