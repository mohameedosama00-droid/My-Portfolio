const reveals = document.querySelectorAll('.reveal');
window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    }
  })
})

document.getElementById("profile").onclick = function() {this.classList.toggle("zoomed");};
    