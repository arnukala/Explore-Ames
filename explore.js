// Famous places data (4 places only)
const places = [
  {
    name: "Reiman Gardens",
    description: "Beautiful botanical garden with themed displays, butterfly exhibits, and peaceful walking paths.",
    image: "assets/images/place1.png"
  },
  {
    name: "ISU Campanile",
    description: "Iconic Iowa State landmark — enjoy the carillon bells and scenic views of the campus lawn.",
    image: "assets/images/place2.png"
  },
  {
    name: "Main Street Ames",
    description: "Historic downtown filled with restaurants, art galleries, boutiques, and local events year-round.",
    image: "assets/images/place3.png"
  },
  {
    name: "Ada Hayden Heritage Park",
    description: "Lakefront park with trails, fishing, and picnicking — a perfect spot for nature lovers.",
    image: "assets/images/place4.png"
  }
];

// Get grid container
const grid = document.getElementById("places-grid");

// Function to render place cards
function showPlaces(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="place-card h-100">
        <img src="${p.image}" alt="${p.name}">
        <div class="card-body">
          <h5 class="fw-bold">${p.name}</h5>
          <p>${p.description}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Show all on load
showPlaces(places);
