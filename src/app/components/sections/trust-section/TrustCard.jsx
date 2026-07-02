import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TrustCard({ icon, title, description }) {
  return (
    <div className="bg-theme-box shadow-md rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-transform hover:-translate-y-1">
      <div className="w-16 h-16 rounded-full bg-theme-accent-bg text-theme-accent flex items-center justify-center text-2xl">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-bold text-text-heading uppercase">{title}</h3>
      <p className="text-text-body text-sm">{description}</p>
    </div>
  );
}
