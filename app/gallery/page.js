"use client";
import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
import Pagination from "@/components/common/Gallery/Pagination/Pagination";
export default function Gallery() {
  const image_gallery = [
    {
      id: 1,
      image: "/music/jazz.jpg",
      heading: "Chill with Jazz",
      description:
        "Indulge in the soulful allure of smooth jazz under the stars at [Event Name]'s Jazz Night. Let the seductive melodies and improvisations sweep you away in an intimate, candlelit atmosphere. Join us for an evening of sophistication, where every note tells a story, and the ambiance resonates with the timeless charm of jazz.",
      //need character limit on image description which is a limitation, and needs revision for better user experience
    },
    {
      id: 2,
      image: "/music/live.jpg",
      heading: "Live Music Night",
      description:
        "Welcome to an evening of verses and whispers at [Event Name]'s Poetic Reverie. Join us under the moonlit canopy as words weave tales, emotions bloom, and the air resonates with the enchantment of poetry. Let each stanza carry you through a journey of introspection and beauty. Unearth the power of language in its most rhythmic and profound form, as we celebrate the artistry of spoken and written word.",
    },
    {
      id: 3,
      image: "/music/photography.jpg",
      heading: "Snapshots Celebration",
      description:
        "Join us at Photography Soiree, where every click tells a unique tale. Celebrate visual storytelling and immerse yourself in the magic of frozen moments. Grab your lens and embark on a journey through endless possibilities.",
    },
    {
      id: 4,
      image: "/music/soundengg.jpg",
      heading: "Discs Spin all around",
      description:
        "Dive into the beats at our DJ Night—an electrifying experience of rhythm, lights, and non-stop music. Join us for a night of dance, celebration, and the magic that only a DJ can deliver.",
    },
    {
      id: 5,
      image: "/music/traditional.jpg",
      heading: "Flavours of Traditionality",
      description:
        "Discover the essence of tradition at our Music Showcase. Join us for an evening filled with timeless melodies, celebrating cultural heritage and musical craftsmanship. Let the harmonies of tradition enchant your soul.",
    },
    {
      id: 6,
      image: "/music/techno.jpg",
      heading: "Ultra Techno Fest",
      description:
        "Experience the heartbeat of techno at our Extravaganza—a night of relentless energy and cutting-edge sounds that define the future of music on the dance floor.",
    },
    {
      id: 7,
      image: "/music/retro.jpg",
      heading: "Retro",
      description:
        "Step back in time at our Retro Rewind event. Join us for a nostalgic journey through the golden era of music, where timeless tunes and vintage vibes create an unforgettable celebration of the past. Get ready to groove to the classics and relive the magic of retro cool.",
    },
  ];
  return (
    <main>
      <Container backgroundColor="var(--alabaster)" minHeight="92vh">
        <img
          src="/concert.jpg" // do web image optimization or pay the price with your soul
          className={styles.bgImg}
        />
        <div style={{zIndex: 2, marginTop: "-48px"}}>
          <p className={styles.gallery_heading}>Snapshots</p>
          <Pagination items={image_gallery} itemsPerPage={4} />
        </div>
      </Container>
    </main>
  );
}
