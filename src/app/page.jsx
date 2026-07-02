"use client";

import HeroSection from "./components/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faSackDollar, faHeadset, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans">
      <HeroSection />
      <div className="max-w-5xl mx-auto space-y-12 px-6 py-12">

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-theme-box shadow-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-theme-accent-bg text-theme-accent flex items-center justify-center text-2xl">
              <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <h3 className="text-xl font-bold text-text-heading uppercase">Miễn Phí Ship</h3>
            <p className="text-text-body text-sm">
              Với hóa đơn từ 600k
            </p>
          </div>

          <div className="bg-theme-box shadow-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-theme-accent-bg text-theme-accent flex items-center justify-center text-2xl">
              <FontAwesomeIcon icon={faSackDollar} />
            </div>
            <h3 className="text-xl font-bold text-text-heading uppercase">Hoàn Tiền Gấp 10</h3>
            <p className="text-text-body text-sm">
              Nếu phát hiện hàng giả
            </p>
          </div>

          <div className="bg-theme-box shadow-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-theme-accent-bg text-theme-accent flex items-center justify-center text-2xl">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h3 className="text-xl font-bold text-text-heading uppercase">Tư Vấn 24/7</h3>
            <p className="text-text-body text-sm">
              Hỗ trợ suốt cả tuần
            </p>
          </div>

          <div className="bg-theme-box shadow-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-theme-accent-bg text-theme-accent flex items-center justify-center text-2xl">
              <FontAwesomeIcon icon={faBoxOpen} />
            </div>
            <h3 className="text-xl font-bold text-text-heading uppercase">Kiểm Tra Hàng</h3>
            <p className="text-text-body text-sm">
              Nhận hàng thanh toán
            </p>
          </div>

        </section>

        <section className="bg-theme-cta rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Đăng Ký Đặt Hàng Trước
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Nhận ngay ưu đãi giảm 20% khi đặt trước tai nghe Alpha Works trong hôm nay!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
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

      </div>
    </div>
  );
}
