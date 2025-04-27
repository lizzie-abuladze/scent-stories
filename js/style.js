export function displayPerfumes(item) {
  const container = document.getElementById("perfume-container");

  item.forEach(function (perfume) {
    const perfumeCard = document.createElement("div");
    perfumeCard.classList.add("perfume-card");

    const nameElement = document.createElement("h2");
    nameElement.classList.add("perfume-name");
    nameElement.textContent = perfume.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("perfume-description");
    descriptionElement.textContent = perfume.description;

    const priceElement = document.createElement("p");
    priceElement.classList.add("perfume-price");
    const priceText = document.createElement("strong");
    priceText.textContent = "Price: ";
    priceElement.appendChild(priceText);
    priceElement.appendChild(document.createTextNode("$" + perfume.price));

    perfumeCard.appendChild(nameElement);
    perfumeCard.appendChild(descriptionElement);
    perfumeCard.appendChild(priceElement);

    container.appendChild(perfumeCard);
  });
}
