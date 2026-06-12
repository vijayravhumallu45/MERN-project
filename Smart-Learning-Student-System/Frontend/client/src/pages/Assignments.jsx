import Navbar from "../components/Navbar";
import { FaClipboardList } from "react-icons/fa";

function Assignments() {

  const assignments = [
    {
      title: "React Authentication",
      due: "15 June 2026",
      status: "Pending"
    },
    {
      title: "Node REST API",
      due: "20 June 2026",
      status: "Submitted"
    },
    {
      title: "MongoDB CRUD",
      due: "25 June 2026",
      status: "Pending"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page-container assignments-page">

        <div className="hero-section assignments-hero">
          <div className="hero-overlay">
            <h1>Assignments</h1>
            <p>Submit and Track Assignments</p>
          </div>
        </div>

        <div className="card-grid assignments-grid">

          {assignments.map((item, index) => (
            <div className="glass-card assignment-card" key={index}>

              <div className="card-icon">
                <FaClipboardList />
              </div>

              <h3>{item.title}</h3>

              <p>Due Date: {item.due}</p>

              <p>Status: {item.status}</p>

              <button className="primary-btn">
                View Assignment
              </button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Assignments;
