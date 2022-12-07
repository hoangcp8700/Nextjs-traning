import React from "react";

import ArrowUp from "@/assets/icons/ic_arrow_up.svg";
import Close from "@/assets/icons/ic_close.svg";
import Loading from "@/assets/icons/ic_loading.svg";
import Search from "@/assets/icons/ic_search.svg";

import Button from "../Button";

export const iconList = {
  search: Search,
  loading: Loading,
  close: Close,
  arrowUp: ArrowUp,
};

export type IconSize =
  | "10"
  | "14"
  | "16"
  | "18"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "64"
  | "72"
  | "80";

export interface IconProps {
  iconName: IconName;
  size?: IconSize;
  isButton?: boolean;
}

export type IconName = keyof typeof iconList;

const Icon: React.FC<IconProps> = ({ iconName, size = "24", isButton }) => {
  const Component = iconList[iconName];
  return (
    <span>
      {!isButton ? (
        <Component style={{ fontSize: size, width: size, height: size }} />
      ) : (
        <Button>
          <Component style={{ fontSize: size, width: size, height: size }} />
        </Button>
      )}
    </span>
  );
};
export default Icon;
