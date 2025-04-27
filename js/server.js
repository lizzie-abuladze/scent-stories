import { displayPerfumes } from "./style.js";

export function axiosFnc() {
  axios
    .get("http://localhost:3000/perfumes")
    .then(function (response) {
      const perfumes = response.data;

      displayPerfumes(perfumes);
    })
    .catch(function (error) {

      console.log(error);
    })
    .finally(function () {
    });
}

