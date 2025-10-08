// Select elements
const grid = document.getElementById("diner-grid");
const emptyState = document.getElementById("empty-state");
const buttons = document.querySelectorAll(".diner-filters .btn");

let diners = []; // store all diners

// Fetch data
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    diners = data.diners;
    showDiners(diners);
    setupFilters(); // ✅ run only after data loads
  })
  .catch(error => console.error("Error loading data:", error));

// Render diners
function showDiners(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    emptyState.classList.remove("d-none");
    return;
  } else {
    emptyState.classList.add("d-none");
  }

  list.forEach(d => {
    const card = document.createElement("div");
    card.className = "col";
    card.innerHTML = `
      <div class="diner-card h-100 text-center p-3 shadow-sm rounded-4">
        <img src="${d.image}" alt="${d.name}" class="img-fluid rounded-3 mb-3">
        <h5 class="fw-bold">${d.name}</h5>
        <p class="text-muted small mb-2">
          <strong>Cuisine:</strong> ${d.cuisine}<br>
          <strong>Specialty:</strong> ${d.specialty}<br>
          <strong>Timings:</strong> ${d.timings}<br>
          <strong>Address:</strong> ${d.address}
        </p>
        <div class="rating mb-2">${d.rating}</div>
        <button class="btn px-3 py-2" style="background-color:#48c74e; color:#fff; font-weight:600; border:none; border-radius:8px;">
          Call Now
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ✅ Set up filters *after* data loads
function setupFilters() {
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter").trim();
      if (category === "all") {
        showDiners(diners);
      } else {
        const filtered = diners.filter(d => d.cuisine.trim().toLowerCase() === category.toLowerCase());
        showDiners(filtered);
      }
    });
  });
}
