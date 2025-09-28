const gallery = document.getElementById("gallery");

const images = [
  { src: "Images/Hor.jpg", alt: "Hornet", overlay: "Быстрый фан-арт" },
  { src: "Images/1.jpg", alt: "Фото 1", overlay: "Тренировка техники фотобаша" },
  { src: "Images/2.gif", alt: "Фото 2", overlay: "3d pixelart модель для игры" },
  { src: "Images/3.jpg", alt: "Фото 3", overlay: "Рисунок оригинального персонажа (устарел)" },
  { src: "Images/4.jpg", alt: "Фото 4", overlay: "Быстрый набросок" },
  { src: "Images/5.jpg", alt: "Фото 5", overlay: "Небрежный набросок" }
];

images.forEach(image => {
  const link = document.createElement("a");
  link.href = image.src;
  link.target = "_blank";

  const item = document.createElement("div");
  item.className = "item";

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.textContent = image.overlay;

  item.appendChild(img);
  item.appendChild(overlay);
  link.appendChild(item);
  gallery.appendChild(link);
});
