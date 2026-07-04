"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPlus,
  faMinus,
  faTrash,
  faShoppingBag,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useShopStore from "../store/useShopStore";
import useModalStore from "../store/useModalStore";

const formatPrice = (price) => price.toLocaleString("vi-VN") + "đ";

const COLOR_DOT_MAP = {
  Đen: "#1e293b",
  Trắng: "#f1f5f9",
  "Xanh Navy": "#1e3a8a",
};

export default function MiniCartDrawer() {
  const { cartItems, isCartOpen, closeCart, updateItemQuantity, removeItem } =
    useShopStore();
  const openModal = useModalStore((state) => state.openModal);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleOrder = () => {
    closeCart();
    openModal();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-theme-box shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2.5">
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className="text-theme-accent"
                />
                <span className="font-black text-text-heading text-base">
                  Giỏ Hàng
                </span>
                {cartItems.length > 0 && (
                  <span className="text-xs font-bold text-white bg-theme-accent rounded-full px-2 py-0.5">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <button
                id="cart-drawer-close"
                onClick={closeCart}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-body hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-theme-accent/10 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faShoppingBag}
                      className="text-theme-accent text-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-text-heading font-bold text-sm">
                      Giỏ hàng trống
                    </p>
                    <p className="text-text-body text-xs mt-1">
                      Hãy thêm sản phẩm vào giỏ nhé!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-3">
                  <AnimatePresence initial={false}>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.color}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p className="text-text-heading font-bold text-sm leading-tight">
                                {item.product.name}
                              </p>
                              <div className="flex items-center gap-1.5 mt-1">
                                <span
                                  className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-500 shrink-0"
                                  style={{
                                    backgroundColor:
                                      COLOR_DOT_MAP[item.color] || "#888",
                                  }}
                                />
                                <span className="text-text-body text-xs">
                                  {item.color}
                                </span>
                              </div>
                            </div>
                            <button
                              id={`cart-remove-${item.color}`}
                              onClick={() => removeItem(item.color)}
                              className="w-6 h-6 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200 shrink-0"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="text-[10px]"
                              />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <motion.button
                                id={`cart-decrease-${item.color}`}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  updateItemQuantity(
                                    item.color,
                                    item.quantity - 1
                                  )
                                }
                                className="w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-text-body hover:border-theme-accent hover:text-theme-accent transition-all"
                              >
                                <FontAwesomeIcon
                                  icon={faMinus}
                                  className="text-[9px]"
                                />
                              </motion.button>
                              <span className="text-text-heading font-black text-sm w-5 text-center">
                                {item.quantity}
                              </span>
                              <motion.button
                                id={`cart-increase-${item.color}`}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  updateItemQuantity(
                                    item.color,
                                    item.quantity + 1
                                  )
                                }
                                className="w-6 h-6 rounded-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center text-text-body hover:border-theme-accent hover:text-theme-accent transition-all"
                              >
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  className="text-[9px]"
                                />
                              </motion.button>
                            </div>
                            <span className="text-theme-accent font-black text-sm">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-body text-sm">Tổng cộng</span>
                  <span className="text-text-heading font-black text-xl">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <motion.button
                  id="cart-checkout-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  className="w-full flex items-center justify-center gap-2 bg-theme-accent text-white font-black text-sm py-3.5 rounded-xl shadow-lg shadow-theme-accent/30 transition-all duration-200"
                >
                  Đặt Hàng Ngay
                  <FontAwesomeIcon icon={faArrowRight} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
