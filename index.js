document.getElementById("year").textContent = new Date().getFullYear();

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById("placesGrid");
    data.places.forEach(place => {
      const card = document.createElement("div");
      card.className = "col-12 col-sm-6 col-lg-3";
      card.innerHTML = `
        <div class="card text-center h-100">
          <img src="${place.image}" class="card-img-top" alt="${place.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="fw-bold">${place.title}</h5>
            <div>
              ${place.chips.map(chip => `<span class="chip">${chip}</span>`).join('')}
            </div>
            <p class="mt-2 flex-grow-1">${place.description}</p>
            <a href="${place.link}" class="btn btn-cta mt-auto">${place.buttonText}</a>
          </div>
        </div>`;
      grid.appendChild(card);
    });
  });

console.log("Welcome to Explore Ames!");