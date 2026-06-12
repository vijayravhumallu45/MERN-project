import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <FaArrowLeft />
        </button>

        <div className="logo">Smart Learning</div>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/jobs">Jobs</Link>

        <div className="profile-section">
          <FaUserCircle
            size={32}
            className="profile-icon"
            onClick={() => setShowProfile(!showProfile)}
          />

          {showProfile && (
            <div className="profile-dropdown">
              <h4>{user?.name}</h4>
              <p>{user?.email}</p>
              <p>{user?.role}</p>

              <button onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
