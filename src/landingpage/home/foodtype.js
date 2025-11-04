import React from 'react';

function FoodType() {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-3 ">
    <i class="fas fa-utensils"></i> Our Menu</h2>
        <p className="text-center text-muted mb-5">
          A journey through flavor, offering the perfect blend of tradition and innovation.
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="menu-card p-4 border rounded shadow-sm h-100 text-center">
              <h3 className="fw-semibold">
                <i class="fas fa-bowl-rice"></i> Starters</h3>
              <p className="text-muted">Kickstart your meal with our tempting appetizer options.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-card p-4 border rounded shadow-sm h-100 text-center">
              <h3 className="fw-semibold">
              <i class="fas fa-pizza-slice"></i> Main Dishes</h3>
              <p className="text-muted">Savor hearty and delicious main course meals full of flavor.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-card p-4 border rounded shadow-sm h-100 text-center">
              <h3 className="fw-semibold"><i class="fa-solid fa-wine-glass"></i> Drinks</h3>
              <p className="text-muted">Refresh with our wide range of chilled and hot beverages.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-card p-4 border rounded shadow-sm h-100 text-center">
              <h3 className="fw-semibold"><i class="fa-solid fa-ice-cream"></i> Desserts</h3>
              <p className="text-muted">End your meal on a sweet note with our desserts.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodType;
