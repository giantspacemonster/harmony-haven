"use client";
import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <main>
      {/* 92vh only for first page container because Navbar takes 8 vh */}
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
        />
        <div className={styles.introContent}>
          <div className={styles.introSubContent1}>
            <div>
              <img src="/logo.svg" className={styles.introLogo} />
            </div>
            <div className={styles.subContent1}>
              <div
                className={`${styles.subContent1Item} ${styles.subContentItem}`}
              >
                <div className={styles.subContent1Layout}>
                  <div className={styles.subContentDate}>
                    <p>09</p>
                    <p>April</p>
                  </div>
                  <hr />
                  <p>CU E1 211</p>
                </div>
              </div>
              <div
                className={`${styles.subContent2Item} ${styles.subContentItem}`}
              >
                <div className={styles.subContent1Layout}>
                  <div className={styles.subContentDate}>
                    <p>12</p>
                    <p>April</p>
                  </div>
                  <hr />
                  <p>CU E1 407</p>
                </div>
              </div>
              <div
                className={`${styles.subContent3Item} ${styles.subContentItem}`}
              >
                <div className={styles.subContent1Layout}>
                  <div className={styles.subContentDate}>
                    <p>24</p>
                    <p>April</p>
                  </div>
                  <hr />
                  <p>CU E1 401</p>
                </div>
              </div>
              <div
                className={`${styles.subContent4Item} ${styles.subContentItem}`}
              >
                <div className={styles.subContent1Layout}>
                  <div className={styles.subContentDate}>
                    <p>28</p>
                    <p>April</p>
                  </div>
                  <hr />
                  <p>CU E1 408</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.subContent2}>
              <span style={{ fontSize: "2em" }}>Live @ CU</span>
              <br />
              <span style={{ fontSize: "1em" }}>You're Invited</span>
              <br />
              <button
                type="button"
                style={{
                  border: "none",
                  padding: "12px 24px 12px 24px",
                  fontSize: "1em",
                  cursor: "pointer",
                  borderRadius: "12px",
                }}
                onClick={() => {
                  router.push('/booking')
                }}
              >
                Book your seat Now
              </button>
            </p>
          </div>
        </div>
      </Container>
      {/* <Container backgroundColor="var(--licorice)" minHeight="100vh">
        <div>Hello World</div>
      </Container> */}
    </main>
  );
}
