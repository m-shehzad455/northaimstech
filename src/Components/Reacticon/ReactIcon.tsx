import { IconType } from "@react-icons/all-files";
import React from "react";
import * as AppIcons from "./AppIcon";
export * from "./AppIcon";

export type TAppIcons = keyof typeof AppIcons;
export interface ReactIconLoaderProps
  extends React.HTMLAttributes<SVGAElement> {
  icon?: TAppIcons;
  importName?: TAppIcons;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
/**
 * Replaces the original LazyReactIcon component due to NextJs bug that causes
 * high memory usage and slow compile times with the 'react-icons' version of
 * the library.
 */
export const ReactIcon = ({
  icon,
  ...props
}: ReactIconLoaderProps): JSX.Element | null => {
  type IconTypeKey = keyof typeof AppIcons;
  type AppIconType = Record<IconTypeKey, IconType>;
  const Icon = (AppIcons as AppIconType)[icon || "FaRobot"];
  return Icon ? <Icon {...props} /> : null;
};
export default ReactIcon;
