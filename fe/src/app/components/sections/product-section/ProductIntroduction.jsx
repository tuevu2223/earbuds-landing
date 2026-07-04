"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../../ScrollReveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faBolt,
  faWifi,
  faBatteryFull,
  faVolumeHigh,
  faCheck,
  faPlus,
  faMinus,
  faShoppingBag,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import useShopStore from "../../../store/useShopStore";

const highlights = [
  {
    icon: faHeadphones,
    title: "Chống Ồn Chủ Động ANC",
    description: "Công nghệ ANC thế hệ mới loại bỏ 99% tạp âm xung quanh, giúp bạn tập trung hoàn toàn vào âm nhạc.",
  },
  {
    icon: faBatteryFull,
    title: "Pin 40 Giờ Sử Dụng",
    description: "Sạc nhanh 10 phút là có thể nghe nhạc 2 giờ đồng hồ. Đủ dùng cả tuần mà không cần lo sạc.",
  },
  {
    icon: faWifi,
    title: "Bluetooth 5.3 Ổn Định",
    description: "Kết nối tức thì, phạm vi lên đến 10m. Hỗ trợ kết nối 2 thiết bị cùng lúc cực kỳ tiện lợi.",
  },
  {
    icon: faVolumeHigh,
    title: "Âm Thanh Hi-Fi 40mm",
    description: "Driver 40mm cho bass sâu, treble trong trẻo. Mang đến trải nghiệm âm thanh như phòng thu chuyên nghiệp.",
  },
];

const specs = [
  { label: "Model", value: "Alpha Works Flex 680" },
  { label: "Driver", value: "40mm Dynamic Driver" },
  { label: "Tần số đáp ứng", value: "20Hz – 20kHz" },
  { label: "Bluetooth", value: "5.3 / Phạm vi 10m" },
  { label: "Pin", value: "40 giờ (ANC OFF)" },
  { label: "Sạc", value: "USB-C, 10 phút = 2 giờ" },
  { label: "Trọng lượng", value: "250g" },
];

const COLOR_OPTIONS = [
  { label: "Đen Huyền Bí", value: "Đen", hex: "#1e293b" },
  { label: "Trắng Ngọc Trai", value: "Trắng", hex: "#f1f5f9" },
  { label: "Xanh Navy", value: "Xanh Navy", hex: "#1e3a8a" },
];

const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

export default function ProductIntroduction() {
  const { addToCart, recordView } = useShopStore();
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    recordView();
  }, [recordView]);

  const handleAddToCart = () => {
    addToCart(selectedColor.value, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1000);
  };

  return (
    <section className="py-16">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center mb-12">
          <span className="inline-block text-theme-accent text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Alpha Works Flex 680
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-text-heading leading-tight">
            Thiết Kế Cho Những Người
            <span className="block text-theme-accent">Yêu Âm Nhạc Thực Sự</span>
          </h2>
          <p className="mt-4 text-text-body max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Không chỉ là tai nghe — đây là người bạn đồng hành giúp bạn thoát khỏi thế giới ồn ào và đắm chìm hoàn toàn vào từng nốt nhạc.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" delay={0.2} className="flex items-center justify-center">
          <div className="relative bg-theme-box rounded-3xl p-8 shadow-xl border border-theme-accent/10 flex items-center justify-center w-full max-w-md group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-theme-accent/10 to-blue-100/50 blur-3xl -z-10" />

            <div className="relative w-full aspect-square animate-pulse bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden group-hover:animate-none">
              <Image
                src="/images/1-241030043552.webp"
                alt="Tai nghe không dây chống ồn Alpha Works Flex 680"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-cover drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute top-4 right-4 bg-theme-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              NEW 2024
            </div>

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 shadow-md border border-theme-accent/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="text-text-heading text-xs font-semibold">Còn hàng — Giao ngay hôm nay</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.3} className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-theme-box rounded-2xl p-5 shadow-md border border-theme-accent/10 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-theme-accent-bg text-theme-accent flex items-center justify-center text-lg">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h3 className="text-text-heading font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-text-body text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-theme-box rounded-2xl p-5 shadow-md border border-theme-accent/10">
            <h3 className="text-text-heading font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-theme-accent rounded-full inline-block" />
              Thông Số Kỹ Thuật
            </h3>
            <ul className="divide-y divide-slate-100 space-y-0">
              {specs.map((spec, index) => (
                <li key={index} className="flex justify-between items-center py-2.5 text-sm">
                  <span className="text-text-body">{spec.label}</span>
                  <span className="text-text-heading font-semibold">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-theme-box rounded-2xl p-5 shadow-md border border-theme-accent/10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-text-heading font-black text-2xl">
                {formatPrice(620000)}
              </span>
              <span className="text-xs text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-full">
                Còn hàng
              </span>
            </div>

            <div>
              <p className="text-text-body text-xs font-medium mb-2.5 uppercase tracking-wider">
                Chọn màu sắc
              </p>
              <div className="flex items-center gap-2.5">
                {COLOR_OPTIONS.map((color) => (
                  <button
                    key={color.value}
                    id={`color-option-${color.value}`}
                    onClick={() => setSelectedColor(color)}
                    title={color.label}
                    className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColor.value === color.value
                        ? "border-theme-accent scale-110 shadow-lg"
                        : "border-slate-300 dark:border-slate-600 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {selectedColor.value === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-white text-[10px] drop-shadow"
                        />
                      </span>
                    )}
                  </button>
                ))}
                <span className="text-text-body text-xs ml-1">{selectedColor.label}</span>
              </div>
            </div>

            <div>
              <p className="text-text-body text-xs font-medium mb-2.5 uppercase tracking-wider">
                Số lượng
              </p>
              <div className="flex items-center gap-3">
                <motion.button
                  id="product-decrease-qty"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-600 flex items-center justify-center text-text-body hover:border-theme-accent hover:text-theme-accent transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faMinus} className="text-xs" />
                </motion.button>
                <span className="text-text-heading font-black text-lg w-6 text-center">
                  {quantity}
                </span>
                <motion.button
                  id="product-increase-qty"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-600 flex items-center justify-center text-text-body hover:border-theme-accent hover:text-theme-accent transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faPlus} className="text-xs" />
                </motion.button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                id="add-to-cart-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                disabled={addedFeedback}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-black text-sm transition-all duration-300 shadow-md overflow-hidden relative"
                style={{
                  background: addedFeedback
                    ? "var(--theme-accent)"
                    : "var(--theme-accent)",
                }}
              >
                <AnimatePresence mode="wait">
                  {addedFeedback ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Đã thêm!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-2 text-white"
                    >
                      <FontAwesomeIcon icon={faShoppingBag} />
                      Thêm vào giỏ
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            {["Bảo hành 12 tháng chính hãng", "Đổi trả 7 ngày miễn phí", "Hỗ trợ kỹ thuật 24/7"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-text-body">
                  <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xs" />
                  {item}
                </div>
              )
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
