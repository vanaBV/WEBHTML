document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      let rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  });