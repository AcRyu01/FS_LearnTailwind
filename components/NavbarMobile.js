import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../public/vector.png";
import VectorUp from "../public/vectorUp.png";
import NavCourse from "./NavCourse";

export default function NavbarMobile({ open, setDropdown, dropdown, course }) {
  return (
    <div className={`h-fit bg-white ${!open && "hidden"} mobile:hidden`}>
      <ul className="flex flex-col mx-8  mt-6">
        <li className="pb-6 border-b pl-4">
          <Link href="/">
            <a>รู้จักเรา</a>
          </Link>
        </li>
        <li className="pb-6 pt-7 border-b pl-4">
          <Link href="/custom">
            <a
              className={`${dropdown && " text-purple-500"}`}
              onClick={() => setDropdown((prev) => !prev)}
            >
              หลักสูตรคอร์สเรียน{" "}
              <Image src={dropdown ? VectorUp : Vector} alt="vector"></Image>
            </a>
          </Link>
          {dropdown && <NavCourse course={course} />}
        </li>
        <li className="pb-6 pt-7 border-b pl-4">
          <Link href="/reusing">
            <a>เสียงตอบรับจากองค์กร</a>
          </Link>
        </li>
        <li className="pb-6 pt-7 pl-4">
          <Link href="/responsive">
            <a>สำหรับสถานศึกษา</a>
          </Link>
        </li>
        <li className=" pb-4 pt-3 flex justify-center">
          <button className="py-2 px-24 bg-purple-700 text-white rounded-lg">
            <Link href="/dark">
              <a>ทดลองใช้งาน</a>
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
