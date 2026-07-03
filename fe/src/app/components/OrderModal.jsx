"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeadphones, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../store/useModalStore";

const COUNTDOWN_HOURS = 2;

function CountdownBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-2xl font-black text-white shadow-inner">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function OrderModal() {
  const { isOpen, closeModal } = useModalStore();
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_HOURS * 3600);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt hàng thành công!\nTên: ${formData.name}\nSĐT: ${formData.phone}`);
    closeModal();
  };

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        animating ? "bg-black/60 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"
      }`}
    >
      <div
        className={`relative w-full max-w-md bg-white rounded-3xl shadow-2xl transition-all duration-300 ${
          animating ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="px-8 pt-8 pb-6 flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/30">
            <FontAwesomeIcon icon={faHeadphones} />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide">
              Đặt Hàng Ngay
            </h2>
            <p className="text-cyan-600 font-semibold text-sm mt-1">
              Số lượng quà tặng có hạn — Đừng bỏ lỡ!
            </p>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">
              Khuyến mãi kết thúc sau
            </p>
            <div className="flex items-center gap-3">
              <CountdownBox value={hours} label="Giờ" />
              <span className="text-slate-400 font-black text-2xl pb-5">:</span>
              <CountdownBox value={minutes} label="Phút" />
              <span className="text-slate-400 font-black text-2xl pb-5">:</span>
              <CountdownBox value={seconds} label="Giây" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                placeholder="Tên của bạn"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                type="tel"
                placeholder="Số điện thoại"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black uppercase tracking-wider shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-200 mt-1"
            >
              Đăng Ký Ngay
            </button>
          </form>

          <p className="text-slate-400 text-xs">
            Chúng tôi sẽ liên hệ xác nhận đơn hàng trong vòng 15 phút.
          </p>
        </div>
      </div>
    </div>
  );
}
