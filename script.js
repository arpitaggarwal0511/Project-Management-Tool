// Global JavaScript

// Add event listener to navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (href !== "#") {
        window.location.href = href;
      }
    });
  });
});

// Hero Section JavaScript

// Add event listener to hero button
document.addEventListener("DOMContentLoaded", function() {
  const heroButton = document.querySelector(".hero button");
  heroButton.addEventListener("click", function() {
    alert("Sign up button clicked!");
  });
});

// Features Section JavaScript

// Add event listener to feature icons
document.addEventListener("DOMContentLoaded", function() {
  const featureIcons = document.querySelectorAll(".features i");
  featureIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      alert("Feature icon clicked!");
    });
  });
});

// Testimonials Section JavaScript

// Add event listener to testimonial quotes
document.addEventListener("DOMContentLoaded", function() {
  const testimonialQuotes = document.querySelectorAll(".testimonials p");
  testimonialQuotes.forEach(function(quote) {
    quote.addEventListener("click", function() {
      alert("Testimonial quote clicked!");
    });
  });
});

// Dashboard JavaScript

// Add event listener to dashboard links
document.addEventListener("DOMContentLoaded", function() {
  const dashboardLinks = document.querySelectorAll(".dashboard a");
  dashboardLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (href !== "#") {
        window.location.href = href;
      }
    });
  });
});

// Team JavaScript

// Add event listener to team links
document.addEventListener("DOMContentLoaded", function() {
  const teamLinks = document.querySelectorAll(".team a");
  teamLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (href !== "#") {
        window.location.href = href;
      }
    });
  });
});

// Settings JavaScript

// Add event listener to settings links
document.addEventListener("DOMContentLoaded", function() {
  const settingsLinks = document.querySelectorAll(".settings a");
  settingsLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (href !== "#") {
        window.location.href = href;
      }
    });
  });
});
