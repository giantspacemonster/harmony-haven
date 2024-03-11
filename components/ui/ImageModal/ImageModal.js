import styles from "./ImageModal.module.css";
export default function ImageModal({
  image_heading,
  image_description,
  image,
}) {
  const openImage = (e) => {
    const element = e.currentTarget.childNodes[0];
    element.style.display == "block"
      ? (element.style.display = "none")
      : (element.style.display = "block");
    element.style.cursor = "default";
  };
  return (
    <div
      className={styles.bgimage}
      style={{
        backgroundImage: `url(${image})`,
      }}
      onClick={openImage}
    >
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <img
            id="gallery_img"
            className={styles.gallery_img}
            src={image}
            alt="gallery"
          />
          <div className={styles.image_info}>
            <p className={styles.image_info_heading}>{image_heading}</p>
            <br />
            <br />
            <p className={styles.image_info_desc}>{image_description}</p>
          </div>
        </div>
        <p className={styles.close_info}>
          <img src="/cross.svg" width={10} alt="cross"/> &nbsp; &nbsp;Click
          Anywhere to Close
        </p>
      </div>
    </div>
  );
}
