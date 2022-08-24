import { classNames } from "../String";
import { TransitionChildProps } from "../Utilities/Utilities";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

type TAlertCardProps = {
  className?: string;
  transition?: TransitionChildProps;
  title?: string;
  text?: string | JSX.Element;
  // layout?: "simple" | "list" | "inline"
  type?: "success" | "warning" | "error" | "info";
};
const AlertCardBanner = (props: TAlertCardProps) => {
  const { type, title, text, className } = props;

  const CardAlert = () => {
    let show = document.querySelector(".CardAlert");
    if (show) {
      show.className = "hidden";
    }
  };

  const bgClasses = classNames(
    "",
    type === "info" ? "bg-blue-200" : "",
    type === "success" ? "bg-green-200" : "",
    type === "warning" ? "bg-yellow-200" : "",
    type === "error" ? "bg-red-200" : ""
  );
  const iconClasses = classNames(
    "",
    type === "info" ? "text-blue-600" : "",
    type === "success" ? "text-green-600" : "",
    type === "warning" ? "text-yellow-600" : "",
    type === "error" ? "text-red-500" : ""
  );
  const titleClasses = classNames(
    "hidden md:inline",
    type === "info" ? "text-blue-800" : "",
    type === "success" ? "text-green-600" : "",
    type === "warning" ? "text-yellow-700" : "",
    type === "error" ? "text-red-600" : ""
  );
  const textClasses = classNames(
    "font-bold underline",
    type === "info" ? "text-blue-700" : "",
    type === "success" ? "text-green-700" : "",
    type === "warning" ? "text-yellow-700" : "",
    type === "error" ? "text-red-700" : ""
  );
  const icon = () => {
    switch (type) {
      case "success":
        return <XIcon className={iconClasses} aria-hidden="true" />;
      case "warning":
        return <XIcon className={iconClasses} aria-hidden="true" />;
      case "error":
        return <XIcon className={iconClasses} aria-hidden="true" />;
      case "info":
      default:
        return <XIcon className={iconClasses} aria-hidden="true" />;
    }
  };
  return (
    <div className={classNames(bgClasses, className || "")}>
      <div className="relative CardAlert">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="">
            <p className="font-medium text-white">
              {title && (
                <span className="md:hidden">We announced a new product!</span>
              )}
              {title && <span className={titleClasses}>{title}</span>}
              {text && (
                <span className="block sm:ml-2 sm:inline-block">
                  <Link to={"##"} className={textClasses}>
                    {text} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </span>
              )}
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
            <button
              className="flex p-2 rounded-md bg-transprant"
              onClick={() => CardAlert()}
            >
              <span className="sr-only">Dismiss</span>
              <div className="h-6 w-6 text-white">{icon()}</div>
            </button>
          </div>
        </div>
      </div>

      {/* <div className={textClasses}>{text}</div> */}
      {/* <span className="block sm:ml-2 sm:inline-block">
            <a href="#/" className="text-green-900 font-bold underline">
                Learn more <span aria-hidden="true">&rarr;</span>
            </a>
        </span> */}
      {/* <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
      {/* {title && <h3 className={titleClasses}>{title}</h3>} */}
      {/* {text && <div className={textClasses}>{text}</div>} */}
      {/* <div className="flex-shrink-0">{icon()}</div> */}
    </div>
  );
};
const AlertCard = {
  Simple: ({ className = "", type = "info", ...props }: TAlertCardProps) => {
    return <AlertCardBanner {...props} className={className} type={type} />;
  },
};

export default AlertCard;
