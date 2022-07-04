import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FSlogo from "../public/FSlogo.png";
import Vector from "../public/vector.png";
import VectorUp from "../public/vectorUp.png";
import NavbarMobile from "./NavbarMobile";
// import NavCourse from "./NavCourse";
import Burger from "../public/burger.png";
import Xvector from "../public/X.png";
import Icon1 from "../public/icon1.png";
import Icon2 from "../public/icon2.png";
import Icon3 from "../public/icon3.png";
import Icon4 from "../public/icon4.png";
import Poiter from "../public/pointer.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white ct-text-size mobile:font-medium font-semibold">
      {/* Nav */}
      <div className="flex items-center justify-between text-black ct-h nav-p">
        <div className=" w-[115px] mobile:w-[193px]">
          <Image
            src={FSlogo}
            layout="responsive"
            priority
            alt="FutureSkill logo"
            className=" mr-4"
          ></Image>
        </div>
        {/* Mobile */}
        <div className=" mobile:hidden">
          <Image
            src={open ? Xvector : Burger}
            alt="Burger"
            className="mobile:hidden"
            onClick={() => setOpen((prev) => !prev)}
          ></Image>
        </div>
        {/* Desktop */}
        <ul className=" hidden mobile:flex justify-between items-center ct-gap">
          <li>
            <Link href="/">
              <a>รู้จักเรา</a>
            </Link>
          </li>
          <li>
            <Link href="/custom">
              <a
                className={`${dropdown && " text-purple-500"}`}
                onClick={() => setDropdown((prev) => !prev)}
              >
                หลักสูตรคอร์สเรียน{" "}
                <Image src={dropdown ? VectorUp : Vector} alt="vector"></Image>
              </a>
            </Link>
            {/* {dropdown && <NavCourse course={course} />} */}
          </li>
          <li>
            <Link href="/reusing">
              <a>เสียงตอบรับจากองค์กร</a>
            </Link>
          </li>
          <li>
            <Link href="/responsive">
              <a>สำหรับสถานศึกษา</a>
            </Link>
          </li>
          <li>
            <button className="py-3 px-6 bg-purple-700 text-white rounded-lg">
              <Link href="/dark">
                <a>ทดลองใช้งาน</a>
              </Link>
            </button>
          </li>
        </ul>
      </div>
      {/* Burger */}
      <NavbarMobile
        open={open}
        dropdown={dropdown}
        setDropdown={setDropdown}
        course={course}
      />
    </nav>
  );
}

const course = [
  {
    title: "ทักษะ Technology",
    describe: "50+ คอร์ส และ 180+ ชม. เวลาในการเรียน",
    image: Icon1,
  },
  {
    title: "ทักษะ Business",
    describe: "70+ คอร์ส และ 210+ ชม. เวลาในการเรียน",
    image: Icon2,
  },
  {
    title: "ทักษะ Cretivity",
    describe: "40+ คอร์ส และ 120+ ชม. เวลาในการเรียน",
    image: Icon3,
  },
  {
    title: "ทักษะ Productivity",
    describe: "30+ คอร์ส และ 90+ ชม. เวลาในการเรียน",
    image: Icon4,
  },
];
