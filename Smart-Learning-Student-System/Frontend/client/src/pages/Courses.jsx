import Navbar from "../components/Navbar";
import { FaReact, FaJava, FaPython } from "react-icons/fa";

function Courses() {

  const courses = [
    {
      icon: <FaReact />,
      title: "MERN Stack Development",
      description: "MongoDB, Express, React, Node.js",
      progress: "75%"
    },
    {
      icon: <FaJava />,
      title: "Java Full Stack",
      description: "Spring Boot + React",
      progress: "60%"
    },
    {
      icon: <FaPython />,
      title: "Python Full Stack",
      description: "Django + Data Science",
      progress: "85%"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page-container courses-page">

        <div className="hero-section courses-hero">
          <div className="hero-overlay">
            <h1>Courses</h1>
            <p>Explore and Track Your Learning Journey</p>
          </div>
        </div>

        <div className="card-grid courses-grid">
          {courses.map((course, index) => (
            <div className="glass-card course-card" key={index}>

              <div className="card-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: course.progress }}
                ></div>
              </div>

              <span>{course.progress} Completed</span>

              <button className="primary-btn">
                Continue Learning
              </button>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Courses;
