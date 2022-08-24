import { Transition as T } from "@headlessui/react";

export type TransitionChildProps = {
  as?: JSX.Element;
  show?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
export const Transition = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => <T.Root {...props}>{children}</T.Root>;
/**
 * Creates a wrapper around components to implement common functionality
 * such as transitions.
 */
export const Wrap = ({
  children,
  transition = {},
}: {
  children: React.ReactNode;
  transition?: TransitionChildProps;
}) => {
  if (Object.keys(transition).length > 0) {
    return <Transition {...transition}>{children}</Transition>;
  } else {
    return children;
  }
};
