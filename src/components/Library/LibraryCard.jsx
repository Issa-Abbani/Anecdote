import styles from "./LibraryCard.module.css";

const LibraryCard = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <button className={styles.closeButton}>
          X
        </button>
      </div>
      <p className={styles.cardText}>{description}</p>
    </div>
  );
};

export default LibraryCard;
