export function ourStory() {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
  );

  items.forEach((item) => {
    observer.observe(item);
  });
}
