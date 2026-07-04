"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import useShopStore from "../store/useShopStore";

export default function WishlistButton({ className = "" }) {
  const { isWishlisted, toggleWishlist } = useShopStore();

  return (
    <motion.button
      id="wishlist-toggle-btn"
      onClick={toggleWishlist}
      whileTap={{ scale: 0.85 }}
      aria-label={isWishlisted ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
        isWishlisted
          ? "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-500"
          : "border-slate-200 dark:border-slate-600 text-text-body hover:border-red-300 hover:text-red-400"
      } ${className}`}
    >
      <motion.span
        key={isWishlisted ? "filled" : "outline"}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <FontAwesomeIcon
          icon={isWishlisted ? faHeart : faHeartOutline}
          className="text-base"
        />
      </motion.span>
      <span className="text-sm font-semibold">
        {isWishlisted ? "Đã yêu thích" : "Yêu thích"}
      </span>
    </motion.button>
  );
}
