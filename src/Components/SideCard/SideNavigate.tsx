import {
  CalendarIcon,
  HomeIcon,
  MapIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
const navigation = [
  { name: "Dashboard", href: "/blog", icon: HomeIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Teams", href: "#", icon: UserGroupIcon, current: false },
  { name: "Directory", href: "#", icon: SearchCircleIcon, current: false },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function SideNavigate() {
  return (
    <>
      <div className="space-y-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
            )}
          >
            <item.icon
              className={classNames(
                item.current
                  ? "text-gray-500"
                  : "text-gray-400 group-hover:text-gray-500",
                "mr-4 h-6 w-6"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
      <div>Workspace</div>
    </>
  );
}

export default SideNavigate;
