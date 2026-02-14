// main.js
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

if (btn && menu) {
  btn.onclick = () => {
    menu.classList.toggle("h-[calc(100vh-4rem)]");
  };
}

// Carousel Functions - only run if slides exist
const slides = document.querySelectorAll(".heroSlide");
const dots = document.querySelectorAll(".heroDot");

if (slides.length > 0 && dots.length > 0) {
  let current = 0;
  const interval = 3000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("opacity-100", i === index);
      slide.classList.toggle("opacity-0", i !== index);

      dots[i].classList.toggle("bg-white", i === index);
      dots[i].classList.toggle("bg-white/50", i !== index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  let timer = setInterval(nextSlide, interval);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      clearInterval(timer);
      timer = setInterval(nextSlide, interval);
    });
  });
}

// Notice && News - only run if elements exist
const noticeBox = document.getElementById("noticeBox");
const newsBox = document.getElementById("newsBox");

if (noticeBox && newsBox) {
  const notices = [
    {
      date: "10 Feb 2026",
      text: "Admission open for Class XI (Session 2026–27). Students are advised to submit required documents in the school office.",
    },
    {
      date: "26 Jan 2026",
      text: "School will remain closed on the occasion of Republic Day.",
    },
  ];

  const news = [
    {
      date: "05 Feb 2026",
      text: "Class X students showed excellent performance in the pre-board examination conducted last week.",
    },
    {
      date: "01 Feb 2026",
      text: "Annual sports meet was successfully organized in the school campus.",
    },
  ];

  function verticalScroll(data, boxId, contentId) {
    const box = document.getElementById(boxId);
    const content = document.getElementById(contentId);

    if (!box || !content) return;

    let index = 0;
    let position = box.offsetHeight;
    let speed = 0.4;
    let paused = false;

    function loadItem() {
      const item = data[index];
      content.innerHTML = `
        <span class="block text-sm font-semibold text-purple-700 mb-1">
          ${item.date}
        </span>
        <p class="leading-relaxed">${item.text}</p>
      `;
      position = box.offsetHeight;
    }

    function animate() {
      if (!paused) {
        position -= speed;
        content.style.transform = `translateY(${position}px)`;

        if (position < -content.offsetHeight) {
          index = (index + 1) % data.length;
          loadItem();
        }
      }
      requestAnimationFrame(animate);
    }

    loadItem();
    animate();

    box.addEventListener("mouseenter", () => (paused = true));
    box.addEventListener("mouseleave", () => (paused = false));
    box.addEventListener("touchstart", () => (paused = true));
    box.addEventListener("touchend", () => (paused = false));
  }

  verticalScroll(notices, "noticeBox", "noticeContent");
  verticalScroll(news, "newsBox", "newsContent");
}

// Image Gallery
const imageGrid = document.getElementById("imageGrid");
const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("modalImg");

if (imageGrid && imageModal && imageModalImg) {
  const images = [
    "https://images.pexels.com/photos/5212334/pexels-photo-5212334.jpeg",
    "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
    "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg",
    "https://images.pexels.com/photos/5530437/pexels-photo-5530437.jpeg",
    "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg",
    "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg",
    "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
  ];

  images.forEach((src) => {
    const wrapper = document.createElement("div");
    wrapper.className =
      "aspect-[16/9] border rounded overflow-hidden cursor-pointer bg-white";

    const img = document.createElement("img");
    img.src = src;
    img.className = "w-full h-full object-cover";
    img.onclick = () => openModal(src);

    wrapper.appendChild(img);
    imageGrid.appendChild(wrapper);
  });

  window.openModal = function (src) {
    imageModalImg.src = src;
    imageModal.classList.remove("hidden");
    imageModal.classList.add("flex");
  };

  window.closeModal = function () {
    imageModal.classList.add("hidden");
    imageModal.classList.remove("flex");
  };
}

// Faculty Section - FIXED
const facultyTrack = document.getElementById("facultyTrack");

if (facultyTrack) {
  const facultyData = [
    {
      name: "Rajesh Kumar",
      qualification: "M.Sc Mathematics",
      contact: "+91 9876543210",
      image:
        "images/faculty/user.webp",
      type: "teaching",
    },
    {
      name: "Anita Sharma",
      qualification: "M.A English",
      contact: "+91 9876501234",
      image:
        "images/faculty/user.webp",
      type: "teaching",
    },
    {
      name: "Sanjay Verma",
      qualification: "M.Sc Physics",
      contact: "+91 9812345678",
      image:
        "images/faculty/user.webp",
      type: "teaching",
    },
  ];

  function createFacultyCards(data) {
    // Check if facultyTrack still exists and is valid
    if (!facultyTrack) return;

    data.forEach((member) => {
      if (member.type !== "teaching") return;

      const card = document.createElement("div");
      card.className =
        "w-64 bg-gray-50 border rounded-lg shadow-sm overflow-hidden flex-shrink-0";

      // Create image element separately to handle loading errors
      const img = document.createElement("img");
      img.src = member.image;
      img.alt = member.name;
      img.className = "w-full h-full object-cover";
      img.onerror = function () {
        this.src = "https://via.placeholder.com/400x400?text=No+Image";
      };

      card.innerHTML = `
        <div class="aspect-square overflow-hidden">
          ${img.outerHTML}
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-gray-800">
            ${member.name}
          </h3>
          <p class="text-sm text-gray-600">
            ${member.qualification}
          </p>
          <p class="text-sm text-gray-500 mt-1">
            ${member.contact}
          </p>
        </div>
      `;

      // Double-check facultyTrack exists before appending
      if (facultyTrack) {
        facultyTrack.appendChild(card);
      }
    });
  }

  // Only create cards if facultyTrack exists
  if (facultyTrack) {
    createFacultyCards(facultyData);
    createFacultyCards(facultyData);
  }
}

// Global closeModal function (if not already defined)
if (typeof window.closeModal === "undefined") {
  window.closeModal = function () {
    const modal = document.getElementById("imageModal");
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };
}
