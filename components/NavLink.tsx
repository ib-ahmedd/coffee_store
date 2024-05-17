import { NavLinkProps } from "@types";
import Link from "next/link";
import React from "react";

function NavLink({ path, title, styles }: NavLinkProps) {
  return (
    <Link href={path} className={styles}>
      {title}
    </Link>
  );
}

export default NavLink;
