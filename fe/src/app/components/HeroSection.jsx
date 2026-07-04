"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faShieldHalved,
  faBoltLightning,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../store/useModalStore";
import OrderModal from "./OrderModal";

const stats = [
  { value: "99%", label: "Chống Ồn ANC" },
  { value: "40h", label: "Thời Lượng Pin" },
  { value: "5.3", label: "Bluetooth" },
];

const badges = [
  { icon: faShieldHalved, text: "Bảo hành 12 tháng" },
  { icon: faBoltLightning, text: "Sạc 10' = 2h nghe" },
  { icon: faHeadphones, text: "Đeo cả ngày không đau" },
];

export default function HeroSection() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tai-nghe-khong-day-chong-on-alpha-works-flex-680-2.webp"
            alt="Alpha Works Flex 680 - Tai nghe không dây chống ồn đỉnh cao"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/98 via-slate-900/85 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-cyan-400" />
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.3em]">
                  Alpha Works · Flex 680
                </span>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
                  Đắm Mình
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400">
                    Vào Âm Nhạc
                  </span>
                </h1>
                <p className="mt-5 text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
                  Công nghệ ANC thế hệ mới loại bỏ 99% tiếng ồn. Tận hưởng từng nốt nhạc thuần khiết dù bạn đang ở đâu.
                </p>
              </div>

              <div className="flex items-center gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-300 leading-none">
                      {stat.value}
                    </span>
                    <span className="text-slate-500 text-xs mt-1 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={openModal}
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
                >
                  Đặt Hàng Ngay
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </span>
                </button>

                <a
                  href="#product-introduction"
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold py-4 px-2 transition-colors duration-200 group"
                >
                  Xem chi tiết
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {badges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-slate-300 text-xs font-medium"
                  >
                    <FontAwesomeIcon icon={badge.icon} className="text-cyan-400 text-[11px]" />
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[480px] h-[480px] rounded-full bg-cyan-500/8 blur-3xl" />
              </div>

              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full border border-cyan-400/15 scale-110"
                  style={{ animation: "spin 20s linear infinite" }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-blue-400/10 scale-125"
                  style={{ animation: "spin 30s linear infinite reverse" }}
                />

                <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20">
                  <Image
                    src="/images/hero-product.png"
                    alt="Tai nghe không dây Alpha Works Flex 680"
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 420px"
                    className="object-cover object-center scale-110 hover:scale-115 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 md:top-6 md:right-[-48px] bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-5 py-4 shadow-xl shadow-cyan-500/10">
                  <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">Điểm đánh giá</div>
                  <div className="flex items-end gap-1.5">
                    <span className="text-3xl font-black text-white leading-none">4.8</span>
                    <span className="text-amber-400 text-sm mb-0.5">★★★★★</span>
                  </div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Từ 184+ khách hàng</div>
                </div>

                <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-[-48px] bg-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-2xl px-5 py-4 shadow-xl shadow-green-500/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                    <span className="text-green-400 text-xs font-semibold">Còn hàng</span>
                  </div>
                  <div className="text-white font-black text-xl mt-1 leading-none">620.000đ</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">Giao ngay hôm nay</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="h-16 bg-gradient-to-t from-theme-bg to-transparent" />
        </div>
      </section>

      <OrderModal />
    </>
  );
}
