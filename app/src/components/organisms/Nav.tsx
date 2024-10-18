"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
import { mediaLogo2 } from "@/images/sample";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      // if (
      //   window.scrollY < section2Ref.current.offsetTop &&
      //   window.scrollY >= section1Ref.current.offsetTop
      // ) {
      //   setActiveSection("section1");
      // } else if (
      //   window.scrollY < section3Ref.current.offsetTop &&
      //   window.scrollY >= section2Ref.current.offsetTop
      // ) {
      //   setActiveSection("section2");
      // } else if (
      //   window.scrollY < section4Ref.current.offsetTop &&
      //   window.scrollY >= section3Ref.current.offsetTop
      // ) {
      //   setActiveSection("section3");
      // } else if (window.scrollY >= section4Ref.current.offsetTop) {
      //   setActiveSection("section4");
      // }
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
      } z-50`}
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
          <li className={activeSection === "section1" ? "underline" : ""}>
            <Link href="">인사말</Link>
          </li>
          <li className={activeSection === "section2" ? "underline" : ""}>
            <Link href="">회사소개</Link>
          </li>
          <li className={activeSection === "section3" ? "underline" : ""}>
            <Link href="">서비스</Link>
          </li>
          <li className={activeSection === "section4" ? "underline" : ""}>
            <Link href="">오시는길</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
