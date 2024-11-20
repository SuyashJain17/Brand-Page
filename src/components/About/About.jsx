import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Our Story</h1>
        <p>Crafting comfort and style since 2024</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To provide the perfect blend of comfort, style, and innovation in every step you take. We believe that great footwear can transform your daily experience and elevate your performance.</p>
        </div>

        <div className="about-image">
          <img src="/images/hero-image.png" alt="Our store" />
        </div>
        
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <span className="achievement-number">{achievement.number}</span>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    id: 1,
    title: "Quality First",
    description: "We never compromise on the quality of our products, ensuring each pair meets our high standards."
  },
  {
    id: 2,
    title: "Innovation",
    description: "Constantly pushing boundaries to bring you the latest in footwear technology and design."
  },
  {
    id: 3,
    title: "Sustainability",
    description: "Committed to reducing our environmental impact through responsible manufacturing practices."
  },
  {
    id: 4,
    title: "Customer Focus",
    description: "Your satisfaction is our priority, with exceptional service at every step."
  }
];

const achievements = [
  {
    id: 1,
    number: "1M+",
    description: "Happy Customers"
  },
  {
    id: 2,
    number: "50+",
    description: "Retail Locations"
  },
  {
    id: 3,
    number: "100+",
    description: "Shoe Designs"
  },
  {
    id: 4,
    number: "20+",
    description: "Industry Awards"
  }
];

export default About; 