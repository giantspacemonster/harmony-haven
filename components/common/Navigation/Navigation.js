import Logo from "@/components/ui/Logo/Logo";
import styles from "./Navigation.module.css";
import NavMenu from "./NavMenu";
export default function Navigation({}) {
  return (
    <div
      style={{
        zIndex: 2,
        minHeight: "8vh",
        padding: "0px 6px 0px 6px",
        backgroundColor: "transparent",
        display: "flex",
        color: "var(--white-smoke)",
        justifyContent: "space-between",
      }}
    >
      <Logo />
      <NavMenu />
    </div>
  );
}
