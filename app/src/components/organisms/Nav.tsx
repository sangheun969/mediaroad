"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import { mediaLogo2 } from "@/images/sample";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header flex w-full justify-between py-[15px] fixed text-white px-10 transition duration-300 delay-150 ${
        scrolled ? "bg-white " : ""
      }`}
    >
      <div className="logo w-[200px]  ">
        <Image src={mediaLogo2} alt="" />
      </div>
      <nav>
        <ul
          className={`flex gap-[70px] font-bold mt-5 ${
            scrolled ? "text-black" : ""
          }`}
        >
          <li>
            <Link href="">인사말</Link>
          </li>
          <li>
            <Link href="">회사소개</Link>
          </li>
          <li>
            <Link href="">서비스</Link>
          </li>
          <li>
            <Link href="">오시는길</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-5">
        <Button variant="sendBtn1" size="md" label="Eng" />
      </div>
    </div>
  );
};

export default Nav;
