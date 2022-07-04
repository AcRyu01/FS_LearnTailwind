import React from "react";
import Image from "next/image";
import Icon1 from "../public/icon1.png";
import Pointer from "../public/pointer.png";

export default function NavCourse({ course }) {
  return (
    <div className="mt-7 text-xs pl-4 text-slate-500 font-normal">
      <p className=" mb-7">หมวดหมู่หลักสูตรยอดนิยม</p>
      <div className="flex flex-col">
        {course.map((item) => (
          <div key={item.title} className="flex mb-7 gap-4">
            <Image src={item.image} alt="Icon"></Image>
            <div>
              <p className=" text-base font-semibold text-black">
                {item.title}
              </p>
              <p className=" text-xs ">{item.describe}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-red-500">
        ขอรายละเอียดคอร์สเรียนทั้งหมด
        <span className=" ml-2">
          <Image src={Pointer} alt="pointer"></Image>
        </span>
      </p>
    </div>
  );
}
