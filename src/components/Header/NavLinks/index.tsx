import { AnchorProps, Group } from "@mantine/core";
import React from "react";
import NavLink from "./NavLink";

export interface NavLinkProps {
  label: string;
  path: string;
  anchorProps?: AnchorProps
}

export const navLinks: NavLinkProps[] = [
  {
    label: "Home Page",
    path: "/",
  },
  {
    label: "Hotel",
    path: "/hotel",
  },
  {
    label: "Flight",
    path: "/flight",
  },
  {
    label: "Car Rental",
    path: "/rental",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Campaigns",
    path: "/campaigns",
    anchorProps: {
      c: "yellow"
    }
  },
];

const NavLinks = () => {
  return (
    <Group gap="lg" visibleFrom="xs">
      {navLinks.map((navLink, i) => (
        <NavLink key={`navLink-${i}`} {...navLink} />
      ))}
    </Group>
  );
};

export default NavLinks;
