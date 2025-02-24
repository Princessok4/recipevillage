import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
 
export default function Sidebar({ links, close }) {
  return (
    <div
      onClick={close}
      className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50"
      style={{ transform: "translateX(0)" }}
    >
      <div className="mt-16">
        {links.map((link, index) => (
          <Link
            to={link.path}
            key={link.name}
            className="flex items-center p-4 text-gray-900 text-lg border-l-4 border-transparent hover:bg-gray-100 hover:border-pink-600 transition-all duration-200"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-3" />
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
 