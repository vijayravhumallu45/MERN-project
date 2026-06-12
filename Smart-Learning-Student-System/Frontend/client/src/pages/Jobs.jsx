import Navbar from "../components/Navbar";
import { FaBriefcase } from "react-icons/fa";

function Jobs() {

  const jobs = [
    {
      company: "TCS",
      role: "React Developer",
      location: "Hyderabad"
    },
    {
      company: "Infosys",
      role: "MERN Developer",
      location: "Bangalore"
    },
    {
      company: "Wipro",
      role: "Frontend Developer",
      location: "Chennai"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="page-container jobs-page">

        <div className="hero-section jobs-hero">
          <div className="hero-overlay">
            <h1>Placement Opportunities</h1>
            <p>Apply for Available Jobs</p>
          </div>
        </div>

        <div className="card-grid jobs-grid">

          {jobs.map((job, index) => (
            <div className="glass-card job-card" key={index}>

              <div className="card-icon">
                <FaBriefcase />
              </div>

              <h3>{job.company}</h3>

              <p>{job.role}</p>

              <p>{job.location}</p>

              <button className="primary-btn">
                Apply Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </>
  );
}

export default Jobs;
