import styles from './Container.module.css';
export default function Container({
  children,
  backgroundColor,
  minHeight
}) {
  return (
    <div className={styles.main}
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        padding: "0",
        margin: "0",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: minHeight,
        justifyContent: "left",
        textAlign: "center",
        overflow: "hidden",
        objectFit: "fill",
        position: "static",
      }}
    >
      {children}
    </div>
  );
}
