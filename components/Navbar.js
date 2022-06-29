import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <ul className="font-semibold bg-g py-4 text-p flex justify-center items-center gap-12 ">
      <li>
        <Link href="/">
          <a className="hover:underline">Utility-First</a>
        </Link>
      </li>
      <li>
        <Link href="/states">
          <a className="hover:underline">Handling States</a>
        </Link>
      </li>
      <li>
        <Link href="/responsive">
          <a className="hover:underline">Responsive</a>
        </Link>
      </li>
      <li>
        <Link href="/dark">
          <a className="hover:underline">Dark Mode</a>
        </Link>
      </li>
      <li>
        <Link href="/reusing">
          <a className="hover:underline">Reusing Styles</a>
        </Link>
      </li>
      <li>
        <Link href="/custom">
          <a className="hover:underline">Custom Styles</a>
        </Link>
      </li>
      <li>
        <Link href="/functions">
          <a className="hover:underline">Functions & Directives</a>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
