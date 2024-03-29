import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
export default function Contact() {
  return (
    <main>
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
          alt="background"
        />
      </Container>
    </main>
  );
}
