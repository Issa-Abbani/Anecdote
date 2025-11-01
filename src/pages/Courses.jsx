import CourseCard from "../components/Courses/CourseCard.jsx";
import placeholderImg from "../assets/Bg.png";
import course from "./Courses.module.css";

const Courses = () => {
  const courses = [
    { id: 1, title: "Math1", image: placeholderImg },
    { id: 2, title: "Math1", image: placeholderImg },
    { id: 3, title: "Math1", image: placeholderImg },
    { id: 4, title: "Math1", image: placeholderImg },
  ];

return (
    <main className={course.container}>
      <header className={course.header}>
        <h1 className={course.heading}>Courses Uploaded</h1>
        <button className={course.createBtn}>Create Course</button>
      </header>

      <hr className={course.subHead} />

      <div className={course.grid}>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            image={course.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Courses;