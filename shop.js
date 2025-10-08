
const products = [
  {
    name: "Ames Explorer Tee",
    price: 19.99,
    category: "Merch",
    image: "assets/images/shop/Ames Explorer Tee.png",
    description: "Soft t-shirt featuring Ames skyline"
  },
  {
    name: "Ames Explorer Beanie",
    price: 15.99,
    category: "Merch",
    image: "assets/images/shop/Ames Explorer Beanie.png",
    description: "Warm and cozy beanie for winter"
  },
  {
    name: "Ames Sticker Pack",
    price: 12.99,
    category: "Accessories",
    image: "assets/images/shop/Ames Sticker Pack.png",
    description: "Colorful Ames stickers set of 6"
  },
  {
    name: "Cyclone Mascot 3d Minurature Model",
    price: 49.99,
    category: "Souvenirs",
    image: "assets/images/shop/Cyclone Mascot 3d Minurature Model.png",
    description: "Small 3D-printed Cyclone Mascot "
  },
  {
    name: "Ames Coffee Mug",
    price: 12.99,
    category: "Accessories",
    image: "assets/images/shop/Explore Ames Mug.png",
    description: "White ceramic mug with the Explore Ames logo"
  },
  {
    name: "IOWA STATE Keychain",
    price: 8.50,
    category: "Accessories",
    image: "assets/images/shop/ IASTATE Keychain.png",
    description: "Cool metal keychain of Iowa State University logo"
  },
  {
    name: "Iowa State Football Jersey",
    price: 79.99,
    category: "Merch",
    image: "assets/images/shop/Iowa State Jersey.png",
    description: "Small 3D-printed Campanile collectible"
  },
  {
    name: "Vintage Ames Postcard Set",
    price: 19.50,
    category: "Souvenirs",
    image: "assets/images/shop/Vintage Ames Postcard Set.png",
    description: "Set of 5 retro postcards showing classic Ames"
  },
  {
    name: "Ames Landmark Poster Set",
    price: 19.99,
    category: "Souvenirs",
    image: "assets/images/shop/Ames Landmark Posters ser.png",
    description: "Pack of 4 magnets showing ames Landmarks"
  },
];

const grid = document.getElementById("product-grid");


function showProducts(list) {
  grid.innerHTML = ""; 
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "col";

    card.innerHTML = `
      <div class="card h-100 text-center shadow-sm" style="border-radius:15px;">
        <img src="${p.image}" alt="${p.name}" 
             style="height:250px; width:100%; object-fit:cover; border-top-left-radius:15px; border-top-right-radius:15px;">
        <div class="card-body">
          <h5 class="fw-bold">${p.name}</h5>
          <p class="text-muted mb-1">${p.description}</p>
          <p class="fw-bold">$${p.price.toFixed(2)}</p>
          <button class="btn px-3 py-2" 
        style="background-color:#48c74e; color:#fff; font-weight:600; border:none; border-radius:8px;">
  Buy Now
</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

showProducts(products);

const buttons = document.querySelectorAll(".shop-filters .btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.getAttribute("data-filter");
    if (cat === "all") {
      showProducts(products);
    } else {
      const filtered = products.filter(p => p.category === cat);
      showProducts(filtered);
    }
  });
});
