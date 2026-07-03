import Image from "next/image";
import ScrollReveal from "../../ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faVolumeHigh,
  faBolt,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    id: "anc",
    badge: "Công nghệ ANC",
    title: "Chống Ồn Chủ Động",
    subtitle: "Loại bỏ -25dB tạp âm",
    description:
      "Hệ thống chống ồn chủ động ANC thế hệ mới với 4 microphone thông minh — phân tích và triệt tiêu tới 99% tiếng ồn xung quanh trong tích tắc. Tập trung tuyệt đối. Nghe nhạc tuyệt đối.",
    stats: [
      { value: "99%", label: "Triệt tiêu tạp âm" },
      { value: "-25dB", label: "Mức giảm ồn" },
      { value: "4", label: "Microphone thông minh" },
    ],
    icon: faHeadphones,
    image: "/images/241030043902-tn-aw-flex-6801.webp",
    imageAlt: "Alpha Works ANC - Chống ồn chủ động -25dB",
    imageLeft: false,
  },
  {
    id: "sound",
    badge: "Hi-Fi Audio",
    title: "Chất Âm Sống Động",
    subtitle: "Màng loa PET 40mm",
    description:
      "Driver 40mm màng loa PET cao cấp tái tạo âm thanh trung thực từng chi tiết. Bass sâu đầy lực, treble trong trẻo không gắt. Chuẩn HD Sound Quality — cảm giác như đang ngồi trong phòng thu chuyên nghiệp.",
    stats: [
      { value: "40mm", label: "Driver PET" },
      { value: "20–20k", label: "Hz tần số" },
      { value: "HD", label: "Sound Quality" },
    ],
    icon: faVolumeHigh,
    image: "/images/241030043902-tn-aw-flex-6802.webp",
    imageAlt: "Alpha Works - Chất âm sống động màng loa PET 40mm",
    imageLeft: true,
  },
  {
    id: "bass",
    badge: "Pure Bass",
    title: "Âm Trầm Mạnh Mẽ",
    subtitle: "Deep Bass thuần khiết",
    description:
      "Công nghệ Pure Bass tối ưu hóa phần tần số thấp, mang lại tiếng bass dày dặn, mạnh mẽ mà không làm méo tiếng. Cảm nhận từng nhịp beat rõ ràng — từ nhạc EDM đến Jazz đều hoàn hảo.",
    stats: [
      { value: "Pure", label: "Bass Technology" },
      { value: "32Ω", label: "Trở kháng" },
      { value: "108dB", label: "Độ nhạy" },
    ],
    icon: faBolt,
    image: "/images/241030043902-tn-aw-flex-6803.webp",
    imageAlt: "Alpha Works - Pure Bass âm trầm mạnh mẽ",
    imageLeft: false,
  },
  {
    id: "design",
    badge: "Thiết Kế",
    title: "Gấp Gọn Linh Hoạt",
    subtitle: "Trẻ trung, năng động",
    description:
      "Thiết kế gấp gọn 180° tiện lợi, dễ dàng bỏ vào túi hoặc balo. Chất liệu đệm tai memory foam mềm mại, có thể đeo suốt nhiều giờ mà không gây mỏi. Phong cách trẻ trung phù hợp mọi hoàn cảnh.",
    stats: [
      { value: "250g", label: "Siêu nhẹ" },
      { value: "180°", label: "Gấp gọn" },
      { value: "40h", label: "Thời lượng pin" },
    ],
    icon: faRotate,
    image: "/images/241030043902-tn-aw-flex-6804.webp",
    imageAlt: "Alpha Works - Thiết kế trẻ trung gấp gọn linh hoạt",
    imageLeft: true,
  },
];

function FeatureCard({ feature }) {
  const { badge, title, subtitle, description, stats, icon, image, imageAlt, imageLeft } = feature;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${imageLeft ? "lg:grid-flow-dense" : ""}`}>
      <ScrollReveal direction={imageLeft ? "right" : "left"} delay={0.1} className={`flex items-center justify-center ${imageLeft ? "lg:col-start-2" : ""}`}>
        <div className="relative bg-theme-box rounded-3xl overflow-hidden shadow-lg border border-theme-accent/10 w-full max-w-sm aspect-square group cursor-pointer">
          <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse group-hover:animate-none" />
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction={imageLeft ? "left" : "right"} delay={0.2} className={`flex flex-col gap-6 ${imageLeft ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-theme-accent-bg text-theme-accent flex items-center justify-center text-lg">
            <FontAwesomeIcon icon={icon} />
          </div>
          <span className="text-theme-accent text-xs font-bold uppercase tracking-[0.2em]">
            {badge}
          </span>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-black text-text-heading leading-tight">
            {title}
          </h3>
          <p className="text-theme-accent font-semibold text-sm mt-1">{subtitle}</p>
        </div>

        <p className="text-text-body text-sm md:text-base leading-relaxed">{description}</p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-theme-box rounded-2xl p-4 text-center shadow-md border border-theme-accent/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-theme-accent/30"
            >
              <div className="text-xl font-black text-theme-accent">{stat.value}</div>
              <div className="text-text-body text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}

export default function FeatureHighlights() {
  return (
    <section className="py-16 overflow-hidden">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center mb-14">
          <span className="inline-block text-theme-accent text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Tính Năng
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-text-heading leading-tight">
            Vượt Trội Ở Mọi
            <span className="block text-theme-accent">Phương Diện</span>
          </h2>
          <p className="mt-4 text-text-body max-w-xl mx-auto text-sm md:text-base">
            Mỗi tính năng được nghiên cứu kỹ lưỡng và tối ưu để mang lại trải nghiệm nghe nhạc tốt nhất có thể.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-20">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
