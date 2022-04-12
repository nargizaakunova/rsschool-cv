const navbar = document.getElementById("navbar");

function toggleNavbar(event) {
  if (navbar) {
    navbar.classList.toggle("shown");
    event.stopPropagation();
  }
}

// Close navbar in mobile when scrolling
function close() {
  navbar.classList.remove("shown");
}

document.addEventListener("click", close);
