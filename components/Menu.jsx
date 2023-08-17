"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const current = usePathname();
  return (
    <div>
      <ul>
        <li>
          <Link className={current === "/" ? "active" : "inactive"} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={current === "/about" ? "active" : "inactive"}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={current === "/profile" ? "active" : "inactive"}
            href={{ pathname: "/profile", query: { name: "jagodish" } }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className={current === "/product" ? "active" : "inactive"}
            href="/product"
          >
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
