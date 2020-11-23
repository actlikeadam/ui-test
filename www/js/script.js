const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const title = this.querySelector('.indejuice__elements-title').dataset.title;
    const image = this.querySelector('.indejuice__elements-image').src;
    const description = this.querySelector('.indejuice__elements-description').innerHTML;
    const price = this.querySelector('.indejuice__elements-price').dataset.price;

    document.querySelector('.indejuice__modal-header').innerHTML = title;
    document.querySelector('.indejuice__modal-image').src = image;
    document.querySelector('.indejuice__modal-content').innerHTML = description;
    document.querySelector('.indejuice__modal-price').innerHTML = price;
    document.querySelector(".indejuice__modal").classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", () => {
    document.querySelector(".indejuice__modal").classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".indejuice__modal.is-visible")) {
    document.querySelector(".indejuice__modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".indejuice__modal.is-visible")) {
    document.querySelector(".indejuice__modal.is-visible").classList.remove(isVisible);
  }
});