import { useNavigate } from 'react-router-dom';
// import {}

const HeroSection = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/menu');
  };

  const handleCategory = () => {
    navigate('/menu', { state: { showCategories: true } });
  };

  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button onClick={handleShopNow}>Shop Now</button>
          <button className="secondary-btn" onClick={handleCategory}>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/amazon.png" alt="amazon-logo" />
            </a>
            <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
