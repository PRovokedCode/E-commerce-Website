import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Breadcrumb({ items, title }) {
  const breadcrumbItems =
    items ??
    [
      { label: "Home", link: "/" },
      { label: title || "Page" },
    ];

  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center gap-2 text-sm flex-wrap">
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index !== 0 && (
              <ChevronRight
                size={14}
                className="text-gray-400"
              />
            )}

            {item.link ? (
              <Link
                to={item.link}
                className="text-gray-500 hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-primary">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;