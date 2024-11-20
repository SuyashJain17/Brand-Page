import './Location.css';

const Location = () => {
  return (
    <div className="location-container">
      <h1>Our Stores</h1>
      <div className="store-grid">
        {stores.map((store) => (
          <div key={store.id} className="store-card">
            <div className="store-header">
              <h3>{store.name}</h3>
              <span className="store-type">{store.type}</span>
            </div>
            <div className="store-info">
              <p><strong>Address:</strong> {store.address}</p>
              <p><strong>Phone:</strong> {store.phone}</p>
              <div className="store-hours">
                <h4>Store Hours:</h4>
                <p>{store.hours}</p>
              </div>
              <div className="store-features">
                <h4>Available Services:</h4>
                <ul>
                  {store.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const stores = [
  {
    id: 1,
    name: "Nike Downtown Store",
    type: "Flagship Store",
    address: "123 Main St, New York, NY 10001",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-6PM",
    features: ["Custom Fitting", "Nike Pro Consultation", "Student Discount", "Click & Collect"]
  },
  {
    id: 2,
    name: "Nike Sports Hub",
    type: "Sports Center",
    address: "456 Athletic Ave, Brooklyn, NY 11201",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 9AM-8PM",
    features: ["Running Analysis", "Training Programs", "Membership Benefits", "Product Testing"]
  },
  {
    id: 3,
    name: "Nike Factory Outlet",
    type: "Outlet Store",
    address: "789 Discount Blvd, Queens, NY 11101",
    phone: "(555) 246-8135",
    hours: "Mon-Sun: 10AM-10PM",
    features: ["Special Discounts", "Bulk Purchase", "Seasonal Sales", "Price Matching"]
  }
];

export default Location; 