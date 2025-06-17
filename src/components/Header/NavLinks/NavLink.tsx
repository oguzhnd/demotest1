import React, { FC, useEffect, useMemo } from "react";
import { NavLinkProps } from ".";
import { Anchor, Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

import classes from "../Header.module.css";
import { useHover } from "@mantine/hooks";

const NavLink: FC<NavLinkProps> = ({ label, path, anchorProps }) => {
  const t = useTranslations();

  const pathname = usePathname();
  const { push } = useRouter();

  const { ref, hovered } = useHover();

  const isActive = useMemo(() => pathname === path, [pathname]);

  useEffect(() => {
    if (hovered || isActive) {
      ref.current.style.textShadow = `0px 0px 1px ${anchorProps?.c || "#000"}`;
    } else {
      ref.current.style.textShadow = "none";
    }
  }, [isActive, hovered]);

  return (
    <Anchor
      ref={ref}
      c="dark"
      size="compact-md"
      variant="transparent"
      onClick={() => push(path)}
      {...anchorProps}
    >
      {t(label)}
    </Anchor>
  );
};

export default NavLink;
