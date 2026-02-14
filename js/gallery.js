// gallery.js
document.addEventListener("DOMContentLoaded", function () {
  // ========== PHOTO GALLERY ==========
  const galleryImages = [
    // Add your photo URLs here - organize by page (6 per page)
    // Page 1 (1-6)
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    // Page 2 (7-12)
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    // Page 3 (13-18)
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    "images/gallery/sample.jpg",
    // Add more pages as needed
  ];

  // ========== VIDEO GALLERY ==========
  // YouTube videos - replace with your actual video IDs
  const galleryVideos = [
    // Page 1 (1-3)
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "School Annual Function 2025",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Sports Day Highlights",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Independence Day Celebration",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    // Page 2 (4-6)
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Science Exhibition 2025",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Teachers' Day Program",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Farewell Party 2025",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    // Page 3 (7-9)
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Cultural Competition",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Parent-Teacher Meeting",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
    {
      id: "dQw4w9WgXcQ", // Replace with your video ID
      title: "Workshop on Career Guidance",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"
    },
  ];

  // ========== PAGINATION SETTINGS ==========
  const photosPerPage = 6;
  const videosPerPage = 3;

  // ========== PHOTO GALLERY VARIABLES ==========
  let currentPhotoPage = 0;
  let totalPhotoPages = Math.ceil(galleryImages.length / photosPerPage);
  let currentImageIndex = 0;

  // ========== VIDEO GALLERY VARIABLES ==========
  let currentVideoPage = 0;
  let totalVideoPages = Math.ceil(galleryVideos.length / videosPerPage);

  // ========== DOM ELEMENTS ==========
  // Photo elements
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalLoading = document.getElementById("modalLoading");
  const imageCounter = document.getElementById("imageCounter");
  const galleryGrid = document.getElementById("galleryGrid");
  const photoPagination = document.getElementById("photoPagination");
  const photoLoadingIndicator = document.getElementById("photoLoadingIndicator");
  const noImagesMessage = document.getElementById("noImagesMessage");

  // Video elements
  const videoGrid = document.getElementById("videoGrid");
  const videoPagination = document.getElementById("videoPagination");
  const videoLoadingIndicator = document.getElementById("videoLoadingIndicator");
  const noVideosMessage = document.getElementById("noVideosMessage");

  // ========== HELPER FUNCTIONS ==========
  function preloadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  }

  // ========== PHOTO GALLERY FUNCTIONS ==========
  function createGalleryItem(src, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "cursor-pointer";

    const imgContainer = document.createElement("div");
    imgContainer.className =
      "aspect-[16/9] border border-gray-300 rounded-lg overflow-hidden bg-white relative";

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

  function renderPhotoGallery() {
    galleryGrid.innerHTML = "";

    const start = currentPhotoPage * photosPerPage;
    const end = Math.min(start + photosPerPage, galleryImages.length);

    if (galleryImages.length === 0) {
      photoLoadingIndicator.classList.add("hidden");
      noImagesMessage.classList.remove("hidden");
      return;
    }

    for (let i = start; i < end; i++) {
      galleryGrid.appendChild(createGalleryItem(galleryImages[i], i));
    }

    setTimeout(() => {
      photoLoadingIndicator.classList.add("hidden");
      galleryGrid.classList.remove("hidden");
      photoPagination.classList.remove("hidden");
    }, 500);
  }

  function renderPhotoPagination() {
    if (!photoPagination) return;
    photoPagination.innerHTML = "";

    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "‹";
    prevBtn.className = `px-3 py-1 rounded border ${currentPhotoPage === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    prevBtn.onclick = () => {
      if (currentPhotoPage > 0) {
        currentPhotoPage--;
        photoLoadingIndicator.classList.remove("hidden");
        galleryGrid.classList.add("hidden");
        photoPagination.classList.add("hidden");
        setTimeout(() => {
          renderPhotoGallery();
          renderPhotoPagination();
        }, 300);
      }
    };
    photoPagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 0; i < totalPhotoPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i + 1;
      pageBtn.className = `px-3 py-1 rounded border ${currentPhotoPage === i ? "bg-purple-700 text-white" : "bg-white text-purple-700 hover:bg-purple-100"}`;
      pageBtn.onclick = () => {
        currentPhotoPage = i;
        photoLoadingIndicator.classList.remove("hidden");
        galleryGrid.classList.add("hidden");
        photoPagination.classList.add("hidden");
        setTimeout(() => {
          renderPhotoGallery();
          renderPhotoPagination();
        }, 300);
      };
      photoPagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "›";
    nextBtn.className = `px-3 py-1 rounded border ${currentPhotoPage === totalPhotoPages - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    nextBtn.onclick = () => {
      if (currentPhotoPage < totalPhotoPages - 1) {
        currentPhotoPage++;
        photoLoadingIndicator.classList.remove("hidden");
        galleryGrid.classList.add("hidden");
        photoPagination.classList.add("hidden");
        setTimeout(() => {
          renderPhotoGallery();
          renderPhotoPagination();
        }, 300);
      }
    };
    photoPagination.appendChild(nextBtn);
  }

  // ========== VIDEO GALLERY FUNCTIONS ==========
  function createVideoItem(video, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "cursor-pointer";

    const videoContainer = document.createElement("div");
    videoContainer.className =
      "border border-gray-300 rounded-lg overflow-hidden bg-white";

    // YouTube thumbnail
    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "aspect-[16/9] relative bg-gray-100";
    thumbnailDiv.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    `;

    // Video info
    const infoDiv = document.createElement("div");
    infoDiv.className = "p-3";
    infoDiv.innerHTML = `
      <h3 class="font-medium text-gray-800 truncate">${video.title}</h3>
    `;

    thumbnailDiv.onclick = () => openVideo(video.id);

    videoContainer.appendChild(thumbnailDiv);
    videoContainer.appendChild(infoDiv);
    wrapper.appendChild(videoContainer);

    return wrapper;
  }

  function renderVideoGallery() {
    videoGrid.innerHTML = "";

    const start = currentVideoPage * videosPerPage;
    const end = Math.min(start + videosPerPage, galleryVideos.length);

    if (galleryVideos.length === 0) {
      videoLoadingIndicator.classList.add("hidden");
      noVideosMessage.classList.remove("hidden");
      return;
    }

    for (let i = start; i < end; i++) {
      videoGrid.appendChild(createVideoItem(galleryVideos[i], i));
    }

    setTimeout(() => {
      videoLoadingIndicator.classList.add("hidden");
      videoGrid.classList.remove("hidden");
      videoPagination.classList.remove("hidden");
    }, 500);
  }

  function renderVideoPagination() {
    if (!videoPagination) return;
    videoPagination.innerHTML = "";

    // Previous button
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = "‹";
    prevBtn.className = `px-3 py-1 rounded border ${currentVideoPage === 0 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    prevBtn.onclick = () => {
      if (currentVideoPage > 0) {
        currentVideoPage--;
        videoLoadingIndicator.classList.remove("hidden");
        videoGrid.classList.add("hidden");
        videoPagination.classList.add("hidden");
        setTimeout(() => {
          renderVideoGallery();
          renderVideoPagination();
        }, 300);
      }
    };
    videoPagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 0; i < totalVideoPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i + 1;
      pageBtn.className = `px-3 py-1 rounded border ${currentVideoPage === i ? "bg-purple-700 text-white" : "bg-white text-purple-700 hover:bg-purple-100"}`;
      pageBtn.onclick = () => {
        currentVideoPage = i;
        videoLoadingIndicator.classList.remove("hidden");
        videoGrid.classList.add("hidden");
        videoPagination.classList.add("hidden");
        setTimeout(() => {
          renderVideoGallery();
          renderVideoPagination();
        }, 300);
      };
      videoPagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = "›";
    nextBtn.className = `px-3 py-1 rounded border ${currentVideoPage === totalVideoPages - 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white text-purple-700 hover:bg-purple-100"}`;
    nextBtn.onclick = () => {
      if (currentVideoPage < totalVideoPages - 1) {
        currentVideoPage++;
        videoLoadingIndicator.classList.remove("hidden");
        videoGrid.classList.add("hidden");
        videoPagination.classList.add("hidden");
        setTimeout(() => {
          renderVideoGallery();
          renderVideoPagination();
        }, 300);
      }
    };
    videoPagination.appendChild(nextBtn);
  }

  function openVideo(videoId) {
    // Open YouTube video in a new tab or embed in modal
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

  // ========== MODAL FUNCTIONS (for photos) ==========
  function openModal(index) {
    if (!modal || !modalImg || !imageCounter || !modalLoading) return;

    currentImageIndex = index;
    modalLoading.classList.remove("hidden");
    modalImg.classList.add("opacity-0");

    preloadImage(galleryImages[currentImageIndex])
      .then(() => {
        modalImg.src = galleryImages[currentImageIndex];
        modalImg.classList.remove("opacity-0");
        modalLoading.classList.add("hidden");
      })
      .catch(() => {
        modalLoading.classList.add("hidden");
        modalImg.src = galleryImages[currentImageIndex];
      });

    imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
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
      currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
      modalLoading.classList.remove("hidden");
      modalImg.classList.add("opacity-0");

      preloadImage(galleryImages[currentImageIndex])
        .then(() => {
          modalImg.src = galleryImages[currentImageIndex];
          modalImg.classList.remove("opacity-0");
          modalLoading.classList.add("hidden");
        })
        .catch(() => {
          modalLoading.classList.add("hidden");
          modalImg.src = galleryImages[currentImageIndex];
        });

      imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
  };

  window.prevImage = function () {
    if (galleryImages.length > 0 && modalImg && imageCounter && modalLoading) {
      currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
      modalLoading.classList.remove("hidden");
      modalImg.classList.add("opacity-0");

      preloadImage(galleryImages[currentImageIndex])
        .then(() => {
          modalImg.src = galleryImages[currentImageIndex];
          modalImg.classList.remove("opacity-0");
          modalLoading.classList.add("hidden");
        })
        .catch(() => {
          modalLoading.classList.add("hidden");
          modalImg.src = galleryImages[currentImageIndex];
        });

      imageCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }
  };

  // ========== KEYBOARD NAVIGATION ==========
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

  // ========== INITIAL RENDER ==========
  setTimeout(() => {
    renderPhotoGallery();
    renderPhotoPagination();
    renderVideoGallery();
    renderVideoPagination();
  }, 100);
});