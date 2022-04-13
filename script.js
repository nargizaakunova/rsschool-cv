const navbar = document.getElementById("navbar");

function toggleNavbar(event) {
  if (navbar) {
    navbar.classList.toggle("shown");
    event.stopPropagation();
  }
}

function close() {
  navbar.classList.remove("shown");
}

// Close navbar in mobile when choosing any menu item
document.addEventListener("click", close);
