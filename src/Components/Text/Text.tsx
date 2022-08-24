import { classNames } from "../String";
/* eslint-disable-next-line */
export interface TextProps {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
const BodyLight = ({ children, className = "", ...props }: TextProps) => (
  <Text.Body {...props} className={classNames("text-gray-500", className)}>
    {children}
  </Text.Body>
);
const BodyDark = ({ children, className = "", ...props }: TextProps) => (
  <Text.Body
    {...props}
    className={classNames("pt-2 font-medium text-gray-700", className)}
  >
    {children}
  </Text.Body>
);
export const Text = {
  PageTitle: ({ children, className = "", ...props }: TextProps) => {
    return (
      <div
        {...props}
        className={classNames(
          "text-xl font-bold text-gray-900 sm:text-2xl",
          className
        )}
      >
        {children}
      </div>
    );
  },
  Title: ({ children, className = "", ...props }: TextProps) => {
    return (
      <div
        {...props}
        className={classNames("text-lg font-medium text-gray-900", className)}
      >
        {children}
      </div>
    );
  },
  SubTitle: ({ children, className = "", ...props }: TextProps) => {
    return (
      <div
        {...props}
        className={classNames("text-base font-medium text-gray-600", className)}
      >
        {children}
      </div>
    );
  },
  Small: ({ children, className = "", ...props }: TextProps) => {
    return (
      <div {...props} className={classNames("text-xs", className)}>
        {children}
      </div>
    );
  },
  Body: ({ children, className = "", ...props }: TextProps) => {
    return (
      <p {...props} className={classNames("text-sm", className)}>
        {children}
      </p>
    );
  },
  BodyLight,
  BodyDark,
};
