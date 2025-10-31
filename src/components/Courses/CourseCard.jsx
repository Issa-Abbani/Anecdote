import styles from "./CourseCard.module.css";

const CourseCard = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <button className={styles.viewButton}>
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;