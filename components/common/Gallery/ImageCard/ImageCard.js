import ImageModal from "@/components/ui/ImageModal/ImageModal";
import styles from "./ImageCard.module.css";
export default function ImageCard({
    content
}) {
    return (
        <div className={styles.image_card} >
            <div className={styles.image_modal_container} >
                <ImageModal
                    image_heading={content.heading}
                    image_description={content.description}
                    image={content.image}
                />
            </div>
            <div className={styles.image_info} >
                <p className={styles.image_info_heading} >{content.heading}</p>
                <p className={styles.image_info_desc} >
                    {content.description}
                </p>
            </div>
        </div>
    )
}