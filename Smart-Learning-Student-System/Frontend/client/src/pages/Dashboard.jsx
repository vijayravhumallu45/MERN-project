import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaBook,
  FaClipboardList,
  FaBriefcase,
  FaChartLine
} from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        {/* Hero Section */}
        <div className="hero-section">

          <div className="hero-overlay">

            <h1>
              Smart Student Learning &
              Placement Management System
            </h1>

            <p>
              Learn • Practice • Track Progress • Get Placed
            </p>

            <Link to="/courses" className="explore-btn">
              Explore Courses
            </Link>

          </div>

        </div>

        {/* Statistics */}

        <div className="stats-grid">

          <div className="glass-card">
            <FaUserGraduate />
            <h2>120</h2>
            <p>Students</p>
          </div>

          <Link to="/courses" className="glass-card dashboard-card-link">
            <FaBook />
            <h2>25</h2>
            <p>Courses</p>
          </Link>

          <Link to="/assignments" className="glass-card dashboard-card-link">
            <FaClipboardList />
            <h2>15</h2>
            <p>Assignments</p>
          </Link>

          <Link to="/jobs" className="glass-card dashboard-card-link">
            <FaBriefcase />
            <h2>80</h2>
            <p>Jobs</p>
          </Link>

        </div>

        {/* Analytics */}

        <div className="dashboard-row">

          <div className="activity-card">

            <h2>
              <FaChartLine />
              Recent Activities
            </h2>

            <ul>
              <li>Completed React Assignment</li>
              <li>Applied for TCS Internship</li>
              <li>Enrolled in MERN Course</li>
              <li>Scored 90% in Assessment</li>
            </ul>

          </div>

          <div className="activity-card">

            <h2>Upcoming Tasks</h2>

            <ul>
              <li>Node.js Assignment - June 15</li>
              <li>Mock Interview - June 18</li>
              <li>Placement Drive - June 20</li>
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;
