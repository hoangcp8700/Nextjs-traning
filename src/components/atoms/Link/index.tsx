import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import React, { useMemo } from "react";

export type LinkType = {
  useExternal?: boolean;
} & LinkProps &
  React.ComponentPropsWithRef<"a">;

// eslint-disable-next-line react/display-name
const Link = React.forwardRef<HTMLAnchorElement, LinkType>(
  ({ children, href, className, useExternal, ...rest }, ref) => {
    const openTab = useMemo(() => {
      if (href.includes("http") || href.startsWith("#") || useExternal) {
        return {
          rel: "noopener noreferrer",
          target: "_blank",
          className: clsx("cursor-newtab", className),
        };
      }
      return {};
    }, [href, useExternal, className]);

    return (
      <NextLink href={href} ref={ref} className={className} {...rest} {...openTab}>
        {children}
      </NextLink>
    );
  },
);

export default Link;
