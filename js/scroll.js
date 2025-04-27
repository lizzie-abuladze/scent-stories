export function scrollToTop() {

  document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.getElementById("scroll-to-top");

    scrollButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
    });
  });
}
