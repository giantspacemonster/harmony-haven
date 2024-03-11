import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
export default function Neon() {
  return (
    <main>
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
        />
        <div className={styles.events}>
          <div className={styles.eventdesc} id="event1">
            <img src="/mini/neon.jpg" />
            <p
              style={{
                padding: "12px",
                textAlign: "left",
              }}
            >
              Embark on a luminous journey at contra-nox, where music and lights
              unite for an unforgettable festival experience. Brace yourself for
              a night of electrifying beats and mesmerizing illuminations,
              creating a symphony of sound and color like never before
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
