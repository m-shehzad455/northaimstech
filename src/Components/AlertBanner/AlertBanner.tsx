import {
  CheckCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { classNames } from "../String";
import { TransitionChildProps } from "../Utilities/Utilities";

type TAlertBannerProps = {
  className?: string;
  transition?: TransitionChildProps;
  title?: string;
  text?: string | JSX.Element;
  // layout?: "simple" | "list" | "inline"
  type?: "success" | "warning" | "error" | "info";
};
const SimpleAlert = (props: TAlertBannerProps) => {
  const { type, title, text, className } = props;
  const bgClasses = classNames(
    "rounded-md  p-4",
    type === "info" ? "bg-blue-50" : "",
    type === "success" ? "bg-green-50" : "",
    type === "warning" ? "bg-yellow-50" : "",
    type === "error" ? "bg-red-50" : ""
  );
  const iconClasses = classNames(
    "h-5 w-5",
    type === "info" ? "text-blue-400" : "",
    type === "success" ? "text-green-400" : "",
    type === "warning" ? "text-yellow-400" : "",
    type === "error" ? "text-red-400" : ""
  );
  const titleClasses = classNames(
    "text-sm font-medium mb-2",
    type === "info" ? "text-blue-800" : "",
    type === "success" ? "text-green-800" : "",
    type === "warning" ? "text-yellow-800" : "",
    type === "error" ? "text-red-800" : ""
  );
  const textClasses = classNames(
    "text-sm",
    type === "info" ? "text-blue-700" : "",
    type === "success" ? "text-green-700" : "",
    type === "warning" ? "text-yellow-700" : "",
    type === "error" ? "text-red-700" : ""
  );
  const icon = () => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className={iconClasses} aria-hidden="true" />;
      case "warning":
        return <ExclamationIcon className={iconClasses} aria-hidden="true" />;
      case "error":
        return <XCircleIcon className={iconClasses} aria-hidden="true" />;
      case "info":
      default:
        return (
          <InformationCircleIcon className={iconClasses} aria-hidden="true" />
        );
    }
  };
  return (
    <div className={classNames(bgClasses, className || "")}>
      <div className="flex">
        <div className="flex-shrink-0">{icon()}</div>
        <div className="ml-3">
          {title && <h3 className={titleClasses}>{title}</h3>}
          {text && <div className={textClasses}>{text}</div>}
        </div>
      </div>
    </div>
  );
};
export const AlertBanner = {
  Simple: ({ className = "", type = "info", ...props }: TAlertBannerProps) => {
    return <SimpleAlert {...props} className={className} type={type} />;
  },
};
