const viewer = document.getElementById("image-viewer");

if (typeof viewer.showModal === "function") {
  const photo = viewer.querySelector("img");
  const caption = document.getElementById("image-caption");

  document.querySelectorAll(".image-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      const thumbnail = link.querySelector("img");
      photo.src = link.href;
      photo.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt;
      viewer.showModal();
      event.preventDefault();
    });
  });

  viewer.querySelector("button").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
}
