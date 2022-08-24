import { classNames } from "../String";
import { overrideTailwindClasses } from "tailwind-override";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  transparent?: boolean;
  danger?: boolean;
  full?: boolean;
}
/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = "",
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  transparent = false,
  danger = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && "cursor-not-allowed opacity-50";
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          "cursor-pointer px-3 py-2",
          "inline-flex items-center border border-transparent",
          "text-sm font-medium rounded-md shadow-sm ",
          "focus:outline-none focus:ring-2",
          "focus:ring-offset-2 focus:ring-blue-500",
          "flex justify-center",
          full ? "w-full" : "",
          xs ? "px-2.5 py-1.5 text-xs rounded" : "",
          sm ? "px-3 py-2 leading-4 rounded-md" : "",
          lg ? "px-4 py-2 text-base" : "",
          xl ? "px-6 py-3 text-base" : "",
          transparent
            ? "border-gray-300 text-gray-700 bg-white" +
                " hover:bg-gray-50 ripple-on-surface"
            : "bg-blue-600 text-white",
          danger ? "bg-red-500 text-white" : "",
          transparent && danger
            ? "bg-white-700 border-red-500 text-red-500"
            : "",
          isDisabled ? isDisabled : "",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};
/**
 * Spinner Component
 * Implements a component that renders a spinner with Tailwind CSS classes that wrap around a SVG circle with a notch.
 * @param {*} props
 */
export const SpinnerComponent = ({
  spin = true,
  className = "",
}): JSX.Element => {
  return (
    <svg
      className={classNames(
        className,
        `${spin ? "animate-spin" : "animate-spin hidden"}`
      )}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
/**
 * @function LoadingIndicatorButton
 * Implements a button with Tailwind CSS classes that that has a spinning loading indicator and text centered inside.  The default button is blue (bg-blue-500) and white text (text-white) with a white loading indicator.
 * When the `loading` prop is set to true, the button will be disabled and the indicator will be spinning.
 * @param {*} props - The props to be passed to the component.
 */
export function LoadingIndicatorButton({
  loading = false,
  text = "Refresh",
  className = "",
  ...props
}): JSX.Element {
  return (
    <Button
      className={classNames(
        "ring-0 focus:ring-opacity-0 focus:ring-white",
        className
      )}
      {...props}
    >
      <SpinnerComponent className="h-4 w-4" spin={loading} />
      <span className="ml-2">{text}</span>
    </Button>
  );
}
