"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faXmark } from "@fortawesome/free-solid-svg-icons";
import useShopStore from "../store/useShopStore";

function formatViewTime(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "vừa xong";
  if (diffMins < 60) return `${diffMins} phút trước`;
  if (diffHours < 24) return `${diffHours} giờ trước`;
  return `${diffDays} ngày trước`;
}

export default function RecentlyViewedBadge() {
  const { recentlyViewedAt } = useShopStore();
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!recentlyViewedAt || !isMounted) return;

    const elapsed = Date.now() - new Date(recentlyViewedAt).getTime();
    const isRecent = elapsed > 5000;

    if (isRecent) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [recentlyViewedAt, isMounted]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="w-full bg-theme-accent/10 border-b border-theme-accent/20"
        >
          <div className="max-w-5xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-sm">
              <FontAwesomeIcon
                icon={faClock}
                className="text-theme-accent text-xs shrink-0"
              />
              <span className="text-text-body">
                Bạn đã xem sản phẩm này{" "}
                <span className="text-theme-accent font-semibold">
                  {formatViewTime(recentlyViewedAt)}
                </span>
              </span>
            </div>
            <button
              id="recently-viewed-dismiss"
              onClick={() => setIsVisible(false)}
              className="text-text-body hover:text-text-heading transition-colors shrink-0"
            >
              <FontAwesomeIcon icon={faXmark} className="text-xs" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
