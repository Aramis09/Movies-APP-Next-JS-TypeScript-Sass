import React from "react";
import iconApp from "../../../assets/cinema.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./navBar.module.scss";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={iconApp} alt="iconApp" width={50} />
        <p>FunnyMovie</p>
      </div>
      <div className={styles.linksContainer}>
        <Link href="/"> Home</Link>
        <Link href="/explorer"> Explore</Link>
        <Link href="/explorer"> Category</Link>
      </div>
    </div>
  );
}
