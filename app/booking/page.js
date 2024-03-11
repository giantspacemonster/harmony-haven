import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
export default function Booking() {
  return (
    <main>
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
        />
        <div
          style={{
            zIndex: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            style={{
              borderRadius: "12px",
              background: "transparent",
              backdropFilter: "blur(5px)",
              color: "var(--white-smoke)",
              margin: "12px",
              padding: "12px",
              boxShadow:
                "5px 5px 10px #121113, -1px -1px 2px #fff, 1px 1px 2px #555",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "25% 10% 40% 25%",
              }}
            >
              <div></div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
              <div></div>
            </div>
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "25% 10% 40% 25%",
              }}
            >
              <div></div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" />
              <div></div>
            </div>
            <br />
            <fieldset>
              <legend>Event Type:</legend>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "45% 45%",
                  columnGap: "5%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="jazz" />{" "}
                  <label for="jazz"> Jazz Night</label>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="neon" />{" "}
                  <label for="jazz"> Neon Night</label>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="lights" />{" "}
                  <label for="jazz"> Lights Show</label>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="mic" />{" "}
                  <label for="jazz"> Open Mic</label>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="photography" />{" "}
                  <label for="jazz"> Snapshots Celebration</label>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "15% 85%",
                  }}
                >
                  <input type="checkbox" value="retro" />{" "}
                  <label for="jazz"> Retro Night</label>
                </div>
              </div>
            </fieldset>
            <label for="phone">Phone:</label>
            <br />
            <input type="number" name="phone" id="phone" />
            <br />
            <br />
            <input type="submit" value="Book Seat Now" />
          </form>
        </div>
      </Container>
    </main>
  );
}
