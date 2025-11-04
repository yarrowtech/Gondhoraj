import React from 'react';


const foodItems = [
  {
    title: "Bengali Fish Delight",
    image: "media/fish.jpg",
    description:
      "A traditional Bengali masterpiece featuring tender fish simmered in a mustard and spice-infused gravy, served with fragrant steamed rice.",
  },
  {
    title: "Special Bengali Thali",
    image: "media/bengali food.jpg",
    description:
      "Crispy and spicy wings coated in flavorful sauce, perfect for sharing or solo indulgence.",
  },
  {
    title: " Lemon Mint Refresher",
    image: "media/drink.jpg",
    description:
      "A zesty mix of fresh lemon juice and mint leaves, lightly sweetened and topped with chilled soda — a sparkling and invigorating classic.",
  },
  {
    title: "Butter Naan & Curry",
    image: "media/nun.jpg",
    description:
      "Soft, buttery naan served with rich, creamy curry for a satisfying traditional meal.",
  },
];

const FoodCard = ({ image, title, description }) => (
  <div className="col-md-6 col-lg-3 mb-4">
    <div className="card h-100 shadow-sm food-card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-outline-primary mt-auto">Order Now</a>
      </div>
    </div>
  </div>
);

function Popularfood() {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-3"> Most Popular Dishes </h2>
      <p className="text-center text-muted mb-5">
        A journey through flavor, offering the perfect blend of tradition and innovation.
      </p>
      <div className="row">
        {foodItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Popularfood;
