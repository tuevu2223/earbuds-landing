import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faWifi,
  faHeadphones,
  faBolt,
  faTriangleExclamation,
  faCircleCheck,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    step: "01",
    icon: faPowerOff,
    title: "Bật Nguồn",
    description:
      "Nhấn giữ nút nguồn 3 giây. Đèn LED nhấp nháy xanh 3 lần và phát tiếng báo — tai nghe đã sẵn sàng hoạt động.",
  },
  {
    step: "02",
    icon: faWifi,
    title: "Kết Nối Bluetooth",
    description:
      "Mở Cài đặt → Bluetooth trên điện thoại, chọn \"Alpha Works Flex 680\". Lần đầu cần ghép đôi, từ lần sau kết nối tự động.",
  },
  {
    step: "03",
    icon: faHeadphones,
    title: "Bật Chống Ồn ANC",
    description:
      "Nhấn nút ANC một lần để bật chế độ chống ồn chủ động. Nhấn lần nữa để chuyển sang Mode Transparency (nghe âm thanh xung quanh). Nhấn tiếp để tắt.",
  },
  {
    step: "04",
    icon: faBolt,
    title: "Sạc Thiết Bị",
    description:
      "Dùng cáp USB-C đi kèm, cắm vào cổng sạc bên tai phải. Đèn đỏ khi đang sạc, đèn xanh khi đầy (khoảng 2 giờ). Sạc 10 phút → nghe được 2 giờ.",
  },
];

const notes = [
  {
    type: "warning",
    icon: faTriangleExclamation,
    text: "Không sạc qua đêm liên tục nhiều ngày — có thể ảnh hưởng tuổi thọ pin.",
  },
  {
    type: "tip",
    icon: faLightbulb,
    text: "Bảo quản tai nghe trong hộp đi kèm khi không sử dụng để tránh bụi và trầy xước.",
  },
  {
    type: "success",
    icon: faCircleCheck,
    text: "Tắt nguồn khi không dùng để tiết kiệm pin. Tai nghe tự tắt sau 10 phút không hoạt động.",
  },
];

const noteStyle = {
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  tip: "bg-blue-50 border-blue-200 text-blue-700",
  success: "bg-green-50 border-green-200 text-green-700",
};

const noteIconStyle = {
  warning: "text-amber-500",
  tip: "text-blue-500",
  success: "text-green-500",
};

export default function UsageGuide() {
  return (
    <section>
      <div className="text-center mb-12">
        <span className="inline-block text-theme-accent text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          Hướng Dẫn Sử Dụng
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-text-heading leading-tight">
          Bắt Đầu Chỉ Với
          <span className="block text-theme-accent">4 Bước Đơn Giản</span>
        </h2>
        <p className="mt-4 text-text-body max-w-xl mx-auto text-sm md:text-base">
          Thiết lập nhanh trong vài phút — và đắm mình vào thế giới âm nhạc tuyệt vời ngay lập tức.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-5">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group flex gap-5 bg-theme-box rounded-2xl p-5 shadow-md border border-theme-accent/10 hover:border-theme-accent/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-theme-accent-bg text-theme-accent flex items-center justify-center text-lg group-hover:bg-theme-accent group-hover:text-white transition-all duration-200">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-theme-accent/30 to-transparent min-h-[20px]" />
                )}
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-theme-accent/50 text-xs font-bold tracking-widest uppercase">
                    Bước {item.step}
                  </span>
                </div>
                <h3 className="text-text-heading font-bold text-base mb-1.5">{item.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-theme-accent/10">
            <Image
              src="/images/241030043902-tn-aw-flex-6809.webp"
              alt="Trải nghiệm nghe nhạc cùng Alpha Works Flex 680"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white font-bold text-lg leading-tight">
                Tắt thế giới ồn ào.
              </p>
              <p className="text-white/70 text-sm mt-0.5">
                Chỉ còn âm nhạc và bạn.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-text-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-amber-400 rounded-full inline-block" />
              Lưu Ý Quan Trọng
            </h3>
            {notes.map((note, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 rounded-xl px-4 py-3 border text-sm ${noteStyle[note.type]}`}
              >
                <FontAwesomeIcon
                  icon={note.icon}
                  className={`mt-0.5 shrink-0 ${noteIconStyle[note.type]}`}
                />
                <span>{note.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
