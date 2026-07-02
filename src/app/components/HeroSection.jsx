"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphones,
  faBolt,
  faWifi,
  faBatteryFull,
  faGift,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../store/useModalStore";
import OrderModal from "./OrderModal";

const FeatureTag = ({ icon, label, className }) => (
  <div
    className={`absolute flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-lg ${className}`}
  >
    <span className="text-cyan-300">
      <FontAwesomeIcon icon={icon} />
    </span>
    {label}
  </div>
);

export default function HeroSection() {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
    <section className="relative w-full overflow-hidden min-h-[520px] flex items-center">

      <div className="absolute inset-0">
        <Image
          src="/images/tai-nghe-khong-day-chong-on-alpha-works-flex-680-2.webp"
          alt="Alpha Works - Tai nghe không dây chống ồn"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(6,182,212,0.12)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

        <div className="flex flex-col gap-6 lg:pr-4">
          <div className="text-cyan-300 font-light tracking-[0.3em] text-sm uppercase">
            Alpha Works
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-wide">
              TAI NGHE KHÔNG DÂY
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                CHỐNG ỒN ĐỈNH CAO
              </span>
            </h1>
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              Công nghệ ANC thế hệ mới, loại bỏ 99% tạp âm — tập trung hoàn toàn vào âm nhạc của bạn.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 bg-white/5 backdrop-blur-md p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                <FontAwesomeIcon icon={faGift} size="sm" />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-wider">Ưu đãi đặc biệt</span>
            </div>

            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">›</span>
                Mua 1 tặng kèm túi đựng tai nghe cao cấp
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">›</span>
                Mua 2 tặng thêm cáp sạc nhanh USB-C
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">›</span>
                Mua 3 giảm thêm 15% toàn bộ đơn hàng
              </li>
            </ul>

            <button
              onClick={openModal}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-black text-sm py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02]">
              ĐẶT HÀNG NGAY
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 py-6">
          <div className="flex items-center gap-3 self-start">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-lg">
              <span className="text-cyan-300"><FontAwesomeIcon icon={faHeadphones} /></span>
              Chống ồn ANC
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-lg">
              <span className="text-cyan-300"><FontAwesomeIcon icon={faWifi} /></span>
              Bluetooth 5.3
            </div>
          </div>

          <div className="relative w-full aspect-square max-w-[280px]">
            <div className="absolute -inset-3 rounded-3xl bg-cyan-400/10 blur-3xl animate-pulse" />
            <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 animate-ping" style={{ animationDuration: "3s" }} />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-cyan-500/30">
              <Image
                src="/images/tai-nghe-khong-day-chong-on-alpha-works-flex-680-2.webp"
                alt="Alpha Works Earbuds"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </div>
          </div>

          <div className="flex items-center gap-3 self-end">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-lg">
              <span className="text-cyan-300"><FontAwesomeIcon icon={faBatteryFull} /></span>
              Pin 40 giờ
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold shadow-lg">
              <span className="text-cyan-300"><FontAwesomeIcon icon={faBolt} /></span>
              Sạc nhanh 10'
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:pl-4">
          <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">Thông số nổi bật</div>

          {[
            { label: "Giảm ồn chủ động", value: "99%", sub: "ANC thế hệ mới" },
            { label: "Thời lượng pin", value: "40h", sub: "Sạc 10 phút nghe 2h" },
            { label: "Kết nối không dây", value: "5.3", sub: "Bluetooth ổn định" },
            { label: "Trọng lượng", value: "250g", sub: "Nhẹ, thoải mái cả ngày" },
          ].map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 min-w-[52px]">
                {spec.value}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{spec.label}</div>
                <div className="text-slate-400 text-xs">{spec.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
    <OrderModal />
    </>
  );
}
