import { faTruckFast, faSackDollar, faHeadset, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import TrustCard from "./TrustCard";
import ScrollReveal from "../../ScrollReveal";

export default function TrustSection() {
  const trustItems = [
    {
      icon: faTruckFast,
      title: "Miễn Phí Ship",
      description: "Với hóa đơn từ 600k",
    },
    {
      icon: faSackDollar,
      title: "Hoàn Tiền Gấp 10",
      description: "Nếu phát hiện hàng giả",
    },
    {
      icon: faHeadset,
      title: "Tư Vấn 24/7",
      description: "Hỗ trợ suốt cả tuần",
    },
    {
      icon: faBoxOpen,
      title: "Kiểm Tra Hàng",
      description: "Nhận hàng thanh toán",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {trustItems.map((item, index) => (
        <ScrollReveal key={index} direction="up" delay={0.1 * index}>
          <TrustCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </ScrollReveal>
      ))}
    </section>
  );
}
