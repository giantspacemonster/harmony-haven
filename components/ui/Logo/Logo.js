"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Logo() {
  const [display, setDisplay] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // handling media queries style.display in js now
    if (window.visualViewport.width < 578) {
      setDisplay(false);
      console.log("hidden");
    } else {
      setDisplay(true);
    }
  }, []);
  return (
    <div
      style={{
        zIndex: 2,
        padding: "2px 6px 2px 6px",
        display: "flex",
        justifyContent: "space-around",
        width: "16vw",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push("/");
      }}
    >
      <img src="/logo.svg" width={48} height={48} alt="HarmonyHaven" />
      {display ? <p>Harmony Haven</p> : null}
    </div>
  );
}
