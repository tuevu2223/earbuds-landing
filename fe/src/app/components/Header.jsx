"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faSun, faMoon, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../store/useModalStore";
import useDarkMode from "../hooks/useDarkMode";
import useShopStore from "../store/useShopStore";

const navItems = [
  { label: "Giới Thiệu", href: "#product-introduction" },
  { label: "Tính Năng Nổi Bật", href: "#features" },
  { label: "Hướng Dẫn", href: "#guide" },
  { label: "Đánh Giá", href: "#reviews" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openModal = useModalStore((state) => state.openModal);
  const { isDark, toggleDarkMode } = useDarkMode();
  const { cart: cartItems, openCart } = useShopStore();
  const totalQty = Array.isArray(cartItems) ? cartItems.reduce((s, i) => s + i.quantity, 0) : 0;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-theme-box/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "body")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-theme-accent flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm tracking-tight">AW</span>
            </div>
            <div className="leading-tight">
              <span
                className={`font-black text-base tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-text-heading" : "text-white"
                }`}
              >
                ALPHA WORKS
              </span>
              <span
                className={`block text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? "text-theme-accent" : "text-cyan-300"
                }`}
              >
                Flex 680
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-theme-accent/10 hover:text-theme-accent ${
                  isScrolled ? "text-text-body" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Bật/tắt dark mode"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? "text-text-body hover:bg-theme-accent/10 hover:text-theme-accent"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <FontAwesomeIcon
                icon={isDark ? faSun : faMoon}
                className="text-base transition-transform duration-300"
              />
            </button>

            <button
              id="header-cart-btn"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? "text-text-body hover:bg-theme-accent/10 hover:text-theme-accent"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-base" />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-theme-accent text-white text-[9px] font-black flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>

            <button
              onClick={openModal}
              className="px-5 py-2 rounded-xl bg-theme-accent text-white text-sm font-bold shadow-md hover:opacity-90 hover:scale-[1.03] transition-all duration-200 cursor-pointer"
            >
              Đặt Hàng Ngay
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Bật/tắt dark mode"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                isScrolled ? "text-text-heading hover:bg-slate-100 dark:hover:bg-slate-700" : "text-white hover:bg-white/10"
              }`}
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-base" />
            </button>

            <button
              id="header-cart-btn-mobile"
              onClick={openCart}
              aria-label="Giỏ hàng"
              className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                isScrolled ? "text-text-heading hover:bg-slate-100 dark:hover:bg-slate-700" : "text-white hover:bg-white/10"
              }`}
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-base" />
              {totalQty > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-theme-accent text-white text-[9px] font-black flex items-center justify-center">
                  {totalQty}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                isScrolled ? "text-text-heading hover:bg-slate-100 dark:hover:bg-slate-700" : "text-white hover:bg-white/10"
              }`}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="text-lg" />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } bg-theme-box/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-700`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-text-body hover:bg-theme-accent/10 hover:text-theme-accent transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setIsMobileMenuOpen(false); openModal(); }}
              className="mt-2 w-full py-3 rounded-xl bg-theme-accent text-white text-sm font-bold shadow-md hover:opacity-90 transition-opacity cursor-pointer"
            >
              Đặt Hàng Ngay
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
