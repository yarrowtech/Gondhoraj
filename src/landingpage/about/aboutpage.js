import React from 'react';


function AboutPage() {
  return (
    <>
      <div className="container py-5">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">
            <i className="fas fa-leaf me-2"></i>Welcome to Gondhoraj
          </h2>
          <p className="text-muted fs-5">
            A celebration of Bengal’s rich culinary heritage – served with warmth and tradition.
          </p>
        </div>

        {/* About Sections */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="info-card bg-light">
              <h4 className="fw-bold mb-2 text-success">
                <i className="fas fa-utensils me-2"></i> Authentic Bengali Cuisine
              </h4>
              <p className="text-muted">
                Dive into traditional flavors with iconic dishes like Ilish Tel Jhal, Bhetki Paturi, and Gondhoraj Chicken.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card bg-white">
              <h4 className="fw-bold mb-2 text-success">
                <i className="fas fa-star me-2"></i> Signature Delights
              </h4>
              <p className="text-muted">
                Our Crab Curry and Bengali Thalis are crowd favorites – aromatic and satisfying.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card bg-light">
              <h4 className="fw-bold mb-2 text-success">
                <i className="fas fa-map-marker-alt me-2"></i>  Prime Locations
              </h4>
              <ul className="list-unstyled text-muted mb-0">
                <li><strong>Salt Lake:</strong> Cozy ambiance, perfect for a peaceful dine-out.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card bg-white">
              <h4 className="fw-bold mb-2 text-success">
                <i className="fas fa-rupee-sign me-2"></i> Affordable Luxury
              </h4>
              <p className="text-muted">
                Meals for two at ₹1,300 (Salt Lake) and ₹1,000 (Gariahat) – delicious and budget-friendly.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="highlight-box mt-5">
          <h5 className="fw-bold">“Experience Bengal’s soul – one dish at a time.”</h5>
          <p className="mb-0">Gondhoraj – Flavours of Bengal</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
