const authors = [
  {
    name: "Anish Reddy Nukala",
    role: "Computer science student",
    email: "arnukala@iastate.edu",
    photo: "assets/images/anish.jpeg",
    bio: "I enjoy designing websites and learning how front-end tools like HTML, CSS, and JavaScript work together. For this project, I helped build the homepage, Shop and Authors sections of Explore Ames, focusing on layout and design to make it easy to use."
  },
  {
    name: "Prajwal Reddy Chenreddy",
    role: "Computer science student",
    email: "preddy@iastate.edu",
    photo: "assets/images/prajwal.jpeg",
    bio: "I Like working on the front-end and adding interactive features with JavaScript. In this project, I worked on the Diners, Explore and FAQ pages, helping to make the site responsive and consistent across all pages."
  }
];

function renderAuthors() {
  const grid = document.getElementById("authorsGrid");
  if (!grid) return;

  grid.innerHTML = authors.map(a => `
    <div class="col">
      <div class="card h-100">
        <img src="${a.photo}" class="card-img-top" alt="${a.name}" onerror="this.src='assets/images/authors/placeholder.jpg'">
        <div class="card-body">
          <h5 class="mb-1">${a.name}</h5>
          <p class="text-muted mb-2">${a.role}</p>
          <p class="text-muted mb-2">${a.email}</p>
          <p class="mb-0">${a.bio}</p>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderAuthors);