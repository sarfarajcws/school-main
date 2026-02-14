// gallery.js
document.addEventListener("DOMContentLoaded", function () {
  // Gallery Images Array
  const galleryImages = [
    // Page 3 (41-45) - Newest
    "https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg",
    "https://images.pexels.com/photos/3771078/pexels-photo-3771078.jpeg",
    "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    "https://images.pexels.com/photos/3769982/pexels-photo-3769982.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    // Page 2 (31-40)
    "https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg",
    "https://images.pexels.com/photos/861307/pexels-photo-861307.jpeg",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    "https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    // Page 1 (16-30)
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    "https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg",
    "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    "https://images.pexels.com/photos/861307/pexels-photo-861307.jpeg",
    "https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/3769982/pexels-photo-3769982.jpeg",
    "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    "https://images.pexels.com/photos/3771078/pexels-photo-3771078.jpeg",
    "https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg",
    // Page 0 (1-15) - Oldest
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    "https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg",
    "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    "https://images.pexels.com/photos/861307/pexels-photo-861307.jpeg",
    "https://images.pexels.com/photos/289738/pexels-photo-289738.jpeg",
    "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg",
    "https://images.pexels.com/photos/3769982/pexels-photo-3769982.jpeg",
    "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
    "https://images.pexels.com/photos/3771078/pexels-photo-3771078.jpeg",
    "https://images.pexels.com/photos/17144608/pexels-photo-17144608.jpeg",
  ];

  // Pagination variables
  const imagesPerPage = 15;
  let currentPage = 0;
  let totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  let currentIndex = 0;

  // Get DOM elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalLoading = document.getElementById("modalLoading");
  const imageCounter = document.getElementById("imageCounter");
  const galleryGrid = document.getElementById("galleryGrid");
  const paginationDiv = document.getElementById("pagination");
  const loadingIndicator = document.getElementById("loadingIndicator");
  const noImagesMessage = document.getElementById("noImagesMessage");

  // Check if elements exist
  if (!galleryGrid) {
    console.error("Gallery grid element not found!");
    return;
  }

  // Function to preload image
  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  }

  // Function to create gallery item with loading state
  function createGalleryItem(src, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "cursor-pointer";

    const imgContainer = document.createElement("div");
    imgContainer.className =
      "aspect-[16/9] border border-gray-300 rounded-lg overflow-hidden bg-white relative";

    // Add loading spinner inside image container
    const spinnerDiv = document.createElement("div");
    spinnerDiv.className =
      "absolute inset-0 flex items-center justify-center bg-gray-100";
    spinnerDiv.innerHTML = '<div class="loading-spinner w-8 h-8"></div>';

    const img = document.createElement("img");
    img.src = src;
    img.alt = "School Gallery Image";
    img.className =
      "w-full h-full object-cover opacity-0 transition-opacity duration-300";
    img.loading = "lazy";

    // When image loads, remove spinner and fade in
    img.onload = () => {
      spinnerDiv.remove();
      img.classList.remove("opacity-0");
    };

    img.onerror = () => {
      spinnerDiv.innerHTML =
        '<span class="text-gray-400 text-sm">Failed to load</span>';
    };

    img.onclick = () => openModal(index);

    imgContainer.appendChild(spinnerDiv);
    imgContainer.appendChild(img);
    wrapper.appendChild(imgContainer);

    return wrapper;
  }

  // Render gallery grid for current page
  function renderGallery() {
    galleryGrid.innerHTML = "";

    const start = currentPage * imagesPerPage;
    const end = Math.min(start + imagesPerPage, galleryImages.length);

    if (galleryImages.length === 0) {
      loadingIndicator.classList.add("hidden");
      noImagesMessage.classList.remove("hidden");
      return;
    }

    for (let i = start; i < end; i++) {
      galleryGrid.appendChild(createGalleryItem(galleryImages[i], i));
    }

    // Hide loading indicator and show grid
    setTimeout(() => {
      loadingIndicator.classList.add("hidden");
      galleryGrid.classList.remove("hidden");
      paginationDiv.classList.remove("hidden");
    }, 500); // Small delay to ensure smooth transition
  }

  // Render pagination controls
  function renderPagination() {
    if (!paginationDiv) return;

    paginationDiv.innerHTML = "";

    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "‹";
    prevBtn.className = `px-3 py-1 rounded border ${currentPage === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    prevBtn.onclick = () => {
      if (currentPage > 0) {
        currentPage--;
        renderGallery();
        renderPagination();
      }
    };
    paginationDiv.appendChild(prevBtn);

    // Page numbers
    for (let i = 0; i < totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i + 1;
      pageBtn.className = `px-3 py-1 rounded border ${currentPage === i ? "bg-purple-700 text-white" : "bg-white text-purple-700 hover:bg-purple-100"}`;
      pageBtn.onclick = () => {
        currentPage = i;
        // Show loading when changing pages
        galleryGrid.classList.add("hidden");
        paginationDiv.classList.add("hidden");
        loadingIndicator.classList.remove("hidden");

        // Simulate loading delay (remove this in production)
        setTimeout(() => {
          renderGallery();
          renderPagination();
        }, 300);
      };
      paginationDiv.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "›";
    nextBtn.className = `px-3 py-1 rounded border ${currentPage === totalPages - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    nextBtn.onclick = () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        // Show loading when changing pages
        galleryGrid.classList.add("hidden");
        paginationDiv.classList.add("hidden");
        loadingIndicator.classList.remove("hidden");

        // Simulate loading delay (remove this in production)
        setTimeout(() => {
          renderGallery();
          renderPagination();
        }, 300);
      }
    };
    paginationDiv.appendChild(nextBtn);
  }

  // Modal functions
  function openModal(index) {
    if (!modal || !modalImg || !imageCounter || !modalLoading) return;

    currentIndex = index;

    // Show loading in modal
    modalLoading.classList.remove("hidden");
    modalImg.classList.add("opacity-0");

    // Preload image before showing
    preloadImage(galleryImages[currentIndex])
      .then(() => {
        modalImg.src = galleryImages[currentIndex];
        modalImg.classList.remove("opacity-0");
        modalLoading.classList.add("hidden");
      })
      .catch(() => {
        modalLoading.classList.add("hidden");
        modalImg.src = galleryImages[currentIndex]; // Show anyway, might be broken
      });

    imageCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  window.closeModal = function () {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  window.nextImage = function () {
    if (galleryImages.length > 0 && modalImg && imageCounter && modalLoading) {
      currentIndex = (currentIndex + 1) % galleryImages.length;

      // Show loading in modal
      modalLoading.classList.remove("hidden");
      modalImg.classList.add("opacity-0");

      // Preload next image
      preloadImage(galleryImages[currentIndex])
        .then(() => {
          modalImg.src = galleryImages[currentIndex];
          modalImg.classList.remove("opacity-0");
          modalLoading.classList.add("hidden");
        })
        .catch(() => {
          modalLoading.classList.add("hidden");
          modalImg.src = galleryImages[currentIndex];
        });

      imageCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    }
  };

  window.prevImage = function () {
    if (galleryImages.length > 0 && modalImg && imageCounter && modalLoading) {
      currentIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;

      // Show loading in modal
      modalLoading.classList.remove("hidden");
      modalImg.classList.add("opacity-0");

      // Preload previous image
      preloadImage(galleryImages[currentIndex])
        .then(() => {
          modalImg.src = galleryImages[currentIndex];
          modalImg.classList.remove("opacity-0");
          modalLoading.classList.add("hidden");
        })
        .catch(() => {
          modalLoading.classList.add("hidden");
          modalImg.src = galleryImages[currentIndex];
        });

      imageCounter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    }
  };

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (modal && !modal.classList.contains("hidden")) {
      if (e.key === "ArrowRight") {
        window.nextImage();
      } else if (e.key === "ArrowLeft") {
        window.prevImage();
      } else if (e.key === "Escape") {
        window.closeModal();
      }
    }
  });

  // Initial render with loading
  setTimeout(() => {
    renderGallery();
    renderPagination();
  }, 100);
});
