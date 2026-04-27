(function () {
  var servicePages = ["mobile-welding.html","gate-railing-welding.html","trailer-equipment-repair.html","custom-metal-fabrication.html","commercial-welding.html"];
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 56) {
      header.classList.add("is-scrolled");
    } else if (window.scrollY < 4) {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (
      href === current ||
      (current !== "mobile-welding.html" && current.indexOf("mobile-welding") > -1 && href === "service-areas.html") ||
      (servicePages.indexOf(current) > -1 && href === "services.html")
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  var lightbox = document.querySelector(".gallery-lightbox");
  if (lightbox) {
    var lightboxImage = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector("figcaption");
    var closeButton = lightbox.querySelector(".gallery-lightbox-close");

    function closeLightbox() {
      lightbox.hidden = true;
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.removeAttribute("src");
      lightboxImage.removeAttribute("alt");
    }

    document.querySelectorAll(".gallery-image-button").forEach(function (button) {
      button.addEventListener("click", function () {
        lightboxImage.src = button.dataset.gallerySrc;
        lightboxImage.alt = button.dataset.galleryAlt || "";
        lightboxCaption.textContent = button.dataset.galleryCaption || "";
        lightbox.hidden = false;
        lightbox.setAttribute("aria-hidden", "false");
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
