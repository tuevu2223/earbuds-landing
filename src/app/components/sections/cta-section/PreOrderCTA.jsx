"use client";

export default function PreOrderCTA() {
  return (
    <section className="bg-theme-cta rounded-3xl p-8 md:p-12 text-center shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4">
        Đăng Ký Đặt Hàng Trước
      </h2>
      <p className="text-blue-100 mb-8 max-w-lg mx-auto">
        Nhận ngay ưu đãi giảm 20% khi đặt trước tai nghe Alpha Works trong hôm nay!
      </p>
      <form
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Nhập email của bạn..."
          className="flex-1 px-4 py-3 rounded-xl text-text-heading outline-none focus:ring-2 focus:ring-theme-btn"
        />
        <button className="bg-theme-btn text-theme-btn-text font-bold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity">
          Đăng Ký Ngay
        </button>
      </form>
    </section>
  );
}
