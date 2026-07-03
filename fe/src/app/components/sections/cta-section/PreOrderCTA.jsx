"use client";

import ScrollReveal from "../../ScrollReveal";

export default function PreOrderCTA() {
  return (
    <ScrollReveal direction="up" delay={0.2}>
      <section className="bg-theme-cta rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
          Đăng Ký Đặt Hàng Trước
        </h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">
          Nhận ngay ưu đãi giảm 20% khi đặt trước tai nghe Alpha Works trong hôm nay!
        </p>
        <form
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto relative z-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            className="flex-1 px-4 py-3 rounded-xl text-text-heading outline-none focus:ring-2 focus:ring-theme-btn transition-all duration-300 hover:shadow-inner"
          />
          <button className="bg-theme-btn text-theme-btn-text font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Đăng Ký Ngay
          </button>
        </form>
      </section>
    </ScrollReveal>
  );
}
