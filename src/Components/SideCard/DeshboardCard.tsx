/* This example requires Tailwind CSS v2.0+ */
import {
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { classNames } from "../../Utils/ClassNames";

const navigation = [
  { name: "Dashboard", href: "/docs", icon: HomeIcon, current: false },
  { name: "Projects", href: "/projects", icon: FolderIcon, current: false },
  { name: "Documents", href: "/blog", icon: InboxIcon, current: false },
  { name: "Reports", href: "/report", icon: ChartBarIcon, current: false },
];

const navgate = [
  { name: "Settings", href: "#", icon: FolderIcon, current: false },
  { name: "Help", href: "#", icon: InboxIcon, current: false },
  { name: "Privacy", href: "#", icon: InboxIcon, current: false },
];

export default function DeshboardCard() {
  return (
    <nav aria-label="Sidebar">
      <div className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            )}
            // aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-6">
        <h3
          className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
          id="projects-headline"
        >
          Projects
        </h3>
        {/* ============{ next Links }============= */}
        <div className="mt-4 space-y-1" aria-labelledby="projects-headline">
          {navgate.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
