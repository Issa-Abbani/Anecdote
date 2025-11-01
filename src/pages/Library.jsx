import styles from "./Library.module.css";
import LibraryCard from "../components/Library/LibraryCard.jsx";

const Library = () => {
  const items = [
    {
      id: 1,
      title: "JavaScript Loops",
      description:
        "JavaScript provides several types of loops to repeatedly execute a block of code until a specified condition is met. These loops are essential for tasks such as iterating over arrays or objects, performing repetitive calculations, or handling events.",
    },
    {
      id: 2,
      title: "JavaScript Loops",
      description:
        "JavaScript provides several types of loops to repeatedly execute a block of code until a specified condition is met. These loops are essential for tasks such as iterating over arrays or objects, performing repetitive calculations, or handling events.",
    },
    {
      id: 3,
      title: "JavaScript Loops",
      description:
        "JavaScript provides several types of loops to repeatedly execute a block of code until a specified condition is met. These loops are essential for tasks such as iterating over arrays or objects, performing repetitive calculations, or handling events.",
    },
  ];

  return (
    <div className={styles.libraryContainer}>
      <h1 className={styles.heading}>My Library</h1>
      <hr className={styles.subheading} />
      <div className={styles.cardsWrapper}>
        {items.map((item) => (
          <LibraryCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
