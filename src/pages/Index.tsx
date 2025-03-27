
import React from 'react';
import '../styles/main.css';

const Index: React.FC = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="logo">MyPortfolio</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#people">People</a></li>
              <li><a href="#hobbies">Hobbies</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <h1>Hello, I'm a Student at San Beda</h1>
        <p>Grade 10 student passionate about art, technology, and gaming</p>
      </section>

      <section id="people">
        <div className="container">
          <h2 className="section-title">People in My Life</h2>
          <div className="people-grid">
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Kahlil</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Nina</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Gabriel</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Uriel</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Dave</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-info">
                <h3 className="person-name">Klara</h3>
                <p className="person-relation">Friend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies">
        <div className="container">
          <h2 className="section-title">My Hobbies</h2>
          <div className="hobbies-grid">
            <div className="hobby-card">
              <div className="hobby-image" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` 
              }}></div>
              <div className="hobby-info">
                <h3 className="hobby-title">Drawing</h3>
                <p className="hobby-description">I'm passionate about drawing and creating art.</p>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-image" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1616593871468-2a9466095580?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` 
              }}></div>
              <div className="hobby-info">
                <h3 className="hobby-title">Mobile Legends</h3>
                <p className="hobby-description">I enjoy playing Mobile Legends in my free time.</p>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-image" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` 
              }}></div>
              <div className="hobby-info">
                <h3 className="hobby-title">Computer Things</h3>
                <p className="hobby-description">I love exploring technology and computer-related activities.</p>
              </div>
            </div>
            <div className="hobby-card">
              <div className="hobby-image" style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')` 
              }}></div>
              <div className="hobby-info">
                <h3 className="hobby-title">Instagram</h3>
                <p className="hobby-description">I enjoy scrolling through Instagram for inspiration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a Grade 10 student at San Beda College Alabang. I live in Las Pinas City and I'm currently 15 years old, turning 16 on June 14th.</p>
              <p>Drawing is one of my strengths, and I'm passionate about creating art. When I'm not drawing, I enjoy playing video games like Mobile Legends.</p>
              <p>I have a keen interest in technology and computer-related activities. In my free time, I also enjoy scrolling through Instagram to stay connected and find inspiration.</p>
              <p>I value my friendships with Kahlil, Nina, Gabriel, Uriel, Dave, and Klara, who make my school life memorable and enjoyable.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student Life" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">MyPortfolio</div>
            <p className="footer-text">© 2023 Student Portfolio. San Beda College Alabang.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
