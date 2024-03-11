"use client";
import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Events() {
  const router = useRouter();
  return (
    <main>
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
        />
        <div className={styles.events}>
          <div
            className={styles.eventdesc}
            id="event1"
            onClick={() => {
              router.push("/event1");
            }}
          >
            <img src="/mini/lights.jpg" />
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
          <div
            className={styles.eventdesc}
            id="event2"
            onClick={() => {
              router.push("/event2");
            }}
          >
            <img src="/mini/jazz.jpg" />
            <p
              style={{
                padding: "12px",
                textAlign: "left",
              }}
            >
              Indulge in the soulful allure of smooth jazz under the stars at
              Jazz Night. Let the seductive melodies and improvisations sweep
              you away in an intimate, candlelit atmosphere. Join us for an
              evening of sophistication, where every note tells a story, and the
              ambiance resonates with the timeless charm of jazz.
            </p>
          </div>
          <div
            className={styles.eventdesc}
            id="event3"
            onClick={() => {
              router.push("/event3");
            }}
          >
            <img src="/mini/mike.jpg" />
            <p
              style={{
                padding: "12px",
                textAlign: "left",
              }}
            >
              Welcome to an evening of verses and whispers at Poetic Reverie.
              Join us under the moonlit canopy as words weave tales, emotions
              bloom, and the air resonates with the enchantment of poetry. Let
              each stanza carry you through a journey of introspection and
              beauty. Unearth the power of language in its most rhythmic and
              profound form, as we celebrate the artistry of spoken and written
              word.
            </p>
          </div>
          <div
            className={styles.eventdesc}
            id="event4"
            onClick={() => {
              router.push("/event4");
            }}
          >
            <img src="/mini/neon.jpg" />
            <p
              style={{
                padding: "12px",
                textAlign: "left",
              }}
            >
              Immerse yourself in the vibrant energy of Neon Nights. Join us for
              a night of pulsating beats, neon hues, and an electrifying
              atmosphere. Step into a world where music and lights converge for
              an unforgettable experience in the heart of the city's neon-lit
              playground.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
