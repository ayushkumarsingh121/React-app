import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Masai School</h1>
          <p>Learn the skills you need to succeed in tech today.</p>
          <button>Join Now</button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Our Courses</h2>
        <div className="course-list">
          <div className="course-item">
            <h3>Full Stack Web Development</h3>
            <p>Learn how to build websites from scratch.</p>
          </div>
          <div className="course-item">
            <h3>Data Science</h3>
            <p>Analyze and visualize data for better insights.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Masai School Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
