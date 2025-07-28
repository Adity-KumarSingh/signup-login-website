import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/'); // Redirects to login page on logout
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Logo</h2>
        <nav>
          <ul>
            <li> Dashboard</li>
            <li> Analytics</li>
            <li> Reports</li>
            <li> Settings</li>
          </ul>
        </nav>

        {/* logout Button At The Bottom*/}
        <div style={{ marginTop: 'auto' }}>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="navbar">
          <h3>Welcome, User!</h3>
          <div className="profile-section">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>

        <section className="cards-section">
          <div className="card"> Metric 1</div>
          <div className="card"> Metric 2</div>
          <div className="card"> Metric 3</div>
        </section>

        <section className="details-section">
          <h4>Activity Overview</h4>
          <div className="placeholder">[Charts / Details Here]</div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
