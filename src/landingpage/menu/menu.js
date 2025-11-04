import React from 'react';
import "../menu.css";

const menuData = {
  Thali: [
    { name: "Veg Thali", price: 295 },
    { name: "Bhetki Thali", price: 415 },
    { name: "Prawn Thali", price: 385 },
    { name: "Chicken Thali", price: 355 },
    { name: "Mutton Thali", price: 445 }
  ],
  Starters: [
    { name: "Prawn Cutlet(4-pc)", price: 415 },
    { name: "Bagda Chingri Salmi(2-pc)", price: 425 },
    { name: "Fish Roll(2-pc)", price: 425 },
    { name: "Fish Fry(2-pc)", price: 425 },
    { name: "Fish kabiraji(2-pc)", price: 425 },
    { name: "Gondhoraj Grilled Fish(2-pc)", price: 425 },
    { name: "Mourala Maachherpeyaji", price: 235 },
    { name: "Gondhoraj Chicken ", price: 295 },
   
  ],
  Drinks: [
    { name: "Red rose", price: 135 },
    { name: "Devi", price: 135 },
    { name: "Swan king", price: 135 },
    { name: "Rustic Story", price: 135 },
    { name: "Gondhoraja Ghol", price: 110 },
    { name: "Diet Cook", price: 65 },
    { name: "Mineral Water", price: 20 },
  ],
  "Other Foods": [
    { name: "Rui Machher Roast", price: 425 },
    { name: "Pabda Jhal", price: 295 },
    { name: "Steamed Rice(Basmati)", price: 205 },
    { name: "Kaju Kismis Pulao", price: 255 },
    { name: "Badsahi Pulao", price: 255 },
    { name: "Basanti Pulao", price: 255 },
    { name: "Chingrir pulao", price: 395 },
   
  ]
};

const MenuSection = ({ title, items = [] }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100 shadow">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center text-warning">{title}</h5>
        <ul
          className="list-group list-group-flush mt-3"
          style={{ maxHeight: '300px', overflowY: 'auto' }}
        >
          {items.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{item.name}</span>
              <span>&#8377;{item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Menu = () => (
  <div className="container my-5">
    <h2 className="text-center text-warning mb-4">Food Menu</h2>
    <div className="row">
      {Object.entries(menuData).map(([category, items]) => (
        <MenuSection key={category} title={category} items={items} />
      ))}
    </div>
  </div>
);

export default Menu;
