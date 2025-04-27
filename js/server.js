import { displayPerfumes } from "./style.js";

export function axiosFnc() {
  axios
    .get("http://localhost:3000/perfumes")
    .then(function (response) {
      const perfumes = response.data;

      displayPerfumes(perfumes);

      const searchInput = document.getElementById("search");
      searchInput.addEventListener("input", function () {
        const searchItem = searchInput.value.trim().toLowerCase();

        const filteredPerfumes = perfumes.filter(perfume =>
          perfume.name.toLowerCase().includes(searchItem)
        );

        const container = document.getElementById("perfume-container");
        container.innerHTML = "";
        
        displayPerfumes(filteredPerfumes);
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });
}
