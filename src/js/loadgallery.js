const galleryStocker = document.getElementById("img_stocker");

export default function Load() {
  for (let i = 1; i <= 9; i++) {
    const path = `src/assets/designs/design${i}.webp`;

    const newImage = document.createElement("img");
    newImage.setAttribute("src", path);

    newImage.classList.add("stock-img");

    galleryStocker.appendChild(newImage);
  }
}
