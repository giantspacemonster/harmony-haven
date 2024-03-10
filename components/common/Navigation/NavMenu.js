"use client";
import { useEffect, useState } from "react";
import styles from "./NavMenu.module.css";
export default function NavMenu() {
  const [display, setDisplay] = useState(true);
  const [menuClicked, setMenuClicked] = useState(false);
  const showMenu = async () => {
    setDisplay(true);
    setMenuClicked(true);
  };
  const showClose = () => {
    setDisplay(false);
    setMenuClicked(false);
  };
  useEffect(() => {
    // handling media queries style.display in js now
    if (window.visualViewport.width < 578) {
      setDisplay(false);
      console.log("hidden");
    }
  }, []);
  return (
    <div className={styles.menu}>
      {display ? (
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/merch">Merch</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      ) : (
        <img
          src="/barmenu.svg"
          width={32}
          height={32}
          onClick={showMenu}
          style={{
            padding: "12px",
          }}
        />
      )}
      {menuClicked ? (
        <img
          src="/cross.svg"
          width={32}
          height={32}
          onClick={showClose}
          style={{
            padding: "12px",
          }}
        />
      ) : null}
    </div>
  );
}
