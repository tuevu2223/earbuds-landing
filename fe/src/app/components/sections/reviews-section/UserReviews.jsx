"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import ScrollReveal from "../../ScrollReveal";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Minh Tuấn",
    initials: "MT",
    avatarColor: "bg-blue-500",
    rating: 5,
    date: "28/06/2025",
    badge: "Đã mua",
    title: "Chống ồn thực sự đỉnh!",
    content:
      "Mình dùng để làm việc tại quán cà phê ồn ào, bật ANC lên là gần như không nghe gì bên ngoài nữa. Âm thanh bass rất căng và rõ ràng. Đeo suốt 5 tiếng không đau tai. Rất đáng tiền!",
    likes: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Trần Thị Lan Anh",
    initials: "LA",
    avatarColor: "bg-pink-500",
    rating: 5,
    date: "20/06/2025",
    badge: "Đã mua",
    title: "Pin trâu, dùng cả tuần không lo",
    content:
      "Mình test pin được 38 tiếng khi không bật ANC, có ANC thì khoảng 28 tiếng. Sạc siêu nhanh, 10 phút cắm là nghe được mấy tiếng. Thiết kế gọn nhẹ, gấp lại rất tiện bỏ balo.",
    likes: 19,
    verified: true,
  },
  {
    id: 3,
    name: "Lê Hoàng Phúc",
    initials: "HP",
    avatarColor: "bg-emerald-500",
    rating: 4,
    date: "15/06/2025",
    badge: "Đã mua",
    title: "Ngon ở tầm giá, xứng đáng mua",
    content:
      "So với giá tiền thì sản phẩm vượt kỳ vọng. Chỉ tiếc là không có app điều chỉnh EQ. Kết nối Bluetooth rất ổn định, chưa bị ngắt lần nào trong 2 tuần dùng. Giao hàng nhanh, đóng gói cẩn thận.",
    likes: 15,
    verified: true,
  },
  {
    id: 4,
    name: "Phạm Thu Hương",
    initials: "TH",
    avatarColor: "bg-violet-500",
    rating: 5,
    date: "10/06/2025",
    badge: "Đã mua",
    title: "Mua cho bạn trai, anh ấy thích lắm",
    content:
      "Mua làm quà sinh nhật, nhìn hộp đẹp sang trọng lắm. Bạn trai đeo vào là mê luôn, bảo chất âm hay hơn nhiều so với cái cũ giá gấp đôi. Sẽ giới thiệu cho bạn bè mua.",
    likes: 11,
    verified: true,
  },
  {
    id: 5,
    name: "Vũ Đức Khải",
    initials: "DK",
    avatarColor: "bg-orange-500",
    rating: 4,
    date: "05/06/2025",
    badge: "Đã mua",
    title: "Tốt nhưng microphone hơi nhạy",
    content:
      "Nghe nhạc thì xuất sắc, nhưng khi gọi điện trong môi trường ồn mic hơi nhạy nên bắt tiếng xung quanh. Ngoài ra hoàn toàn hài lòng — chống ồn tốt, pin lâu, thiết kế đẹp.",
    likes: 8,
    verified: true,
  },
  {
    id: 6,
    name: "Đỗ Ngọc Bảo Châu",
    initials: "BC",
    avatarColor: "bg-cyan-500",
    rating: 5,
    date: "01/06/2025",
    badge: "Đã mua",
    title: "Đeo đi học cả ngày vẫn ok",
    content:
      "Sinh viên nghèo nhưng vẫn có tai nghe xịn nhờ Alpha Works! Đeo học online 6 tiếng không đau tai, pin còn dư dài. ANC bật lên học trong khu trọ ồn mà vẫn tập trung được. Cực kỳ recommend!",
    likes: 32,
    verified: true,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 142, percent: 78 },
  { stars: 4, count: 28, percent: 15 },
  { stars: 3, count: 10, percent: 5 },
  { stars: 2, count: 3, percent: 2 },
  { stars: 1, count: 1, percent: 0 },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={star <= rating ? faStar : faStarEmpty}
          className="text-xs"
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, onLike, likedIds }) {
  const liked = likedIds.has(review.id);
  return (
    <div className="h-full bg-theme-box rounded-2xl p-5 shadow-md border border-theme-accent/10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}
          >
            {review.initials}
          </div>
          <div>
            <p className="text-text-heading font-semibold text-sm">{review.name}</p>
            <p className="text-text-body text-xs">{review.date}</p>
          </div>
        </div>
        <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
          {review.badge}
        </span>
      </div>

      <div>
        <StarRating rating={review.rating} />
        <h4 className="text-text-heading font-bold text-sm mt-2 mb-1">{review.title}</h4>
        <p className="text-text-body text-sm leading-relaxed">{review.content}</p>
      </div>

      <button
        onClick={() => onLike(review.id)}
        className={`self-start flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
          liked
            ? "bg-theme-accent text-white border-theme-accent"
            : "text-text-body border-slate-200 hover:border-theme-accent hover:text-theme-accent"
        }`}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        Hữu ích ({liked ? review.likes + 1 : review.likes})
      </button>
    </div>
  );
}

export default function UserReviews() {
  const [likedIds, setLikedIds] = useState(new Set());

  const handleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section>
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center mb-12">
          <span className="inline-block text-theme-accent text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Đánh Giá
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-text-heading leading-tight">
            Khách Hàng Nói Gì
            <span className="block text-theme-accent">Về Alpha Works?</span>
          </h2>
          <p className="mt-4 text-text-body max-w-xl mx-auto text-sm md:text-base">
            Hơn 180 đánh giá thực tế từ những người đã tin tưởng lựa chọn Alpha Works Flex 680.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <div className="bg-theme-box rounded-3xl p-6 md:p-8 shadow-md border border-theme-accent/10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="text-7xl font-black text-text-heading leading-none">4.8</div>
              <div className="flex items-center gap-1 text-amber-400 text-xl">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FontAwesomeIcon key={s} icon={s <= 4 ? faStar : faStarHalfStroke} />
                ))}
              </div>
              <p className="text-text-body text-sm">Dựa trên 184 đánh giá</p>
            </div>

            <div className="flex flex-col gap-2">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-text-body text-xs w-8 shrink-0">{row.stars}★</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="text-text-body text-xs w-8 text-right shrink-0">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, index) => (
          <ScrollReveal key={review.id} direction="up" delay={0.1 * (index % 3)}>
            <ReviewCard
              review={review}
              onLike={handleLike}
              likedIds={likedIds}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
