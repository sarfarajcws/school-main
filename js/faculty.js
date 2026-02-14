// faculty.js

// Modal functions
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openModal(src) {
  modalImg.src = src;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Make closeModal available globally
window.closeModal = closeModal;
window.openModal = openModal;

// Faculty Data - exactly as you specified
const facultyData = [
  // Teaching Staff (10 teachers)
  {
    name: "Gourav Kumar Swarnakar",
    qualification: "BCA",
    contact: "+91 9876543210",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Anita Sharma",
    qualification: "M.A English",
    contact: "+91 9876501234",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Sanjay Verma",
    qualification: "M.Sc Physics",
    contact: "+91 9812345678",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Priya Singh",
    qualification: "M.Sc Chemistry",
    contact: "+91 9876123450",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Amit Kumar",
    qualification: "M.A History",
    contact: "+91 9876234567",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Sunita Gupta",
    qualification: "M.Sc Botany",
    contact: "+91 9876345678",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Rakesh Pandey",
    qualification: "M.A Hindi",
    contact: "+91 9876456789",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Meera Reddy",
    qualification: "M.Com",
    contact: "+91 9876567890",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Vikram Singh",
    qualification: "M.Sc Zoology",
    contact: "+91 9876678901",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  {
    name: "Deepa Patel",
    qualification: "M.A Economics",
    contact: "+91 9876789012",
    image: "images/faculty/user.webp",
    type: "teaching",
  },
  // Non-Teaching Staff (5 staff)
  {
    name: "Suresh Yadav",
    qualification: "B.Com",
    contact: "+91 9876890123",
    image: "images/faculty/user.webp",
    type: "nonteaching",
  },
  {
    name: "Dinesh Ram",
    qualification: "Intermediate",
    contact: "+91 9876901234",
    image: "images/faculty/user.webp",
    type: "nonteaching",
  },
  {
    name: "Kavita Devi",
    qualification: "B.A, B.Lib",
    contact: "+91 9877012345",
    image: "images/faculty/user.webp",
    type: "nonteaching",
  },
  {
    name: "Ram Prasad",
    qualification: "10th Pass",
    contact: "+91 9877123456",
    image: "images/faculty/user.webp",
    type: "nonteaching",
  },
  {
    name: "Mohan Lal",
    qualification: "ITI",
    contact: "+91 9877234567",
    image: "images/faculty/user.webp",
    type: "nonteaching",
  },
];

// Function to create faculty card - FIXED: smaller image inside same card
function createFacultyCard(member) {
  const card = document.createElement("div");
  card.className = "bg-gray-50 border rounded-lg shadow-sm overflow-hidden";

  card.innerHTML = `
    <div class="flex justify-center pt-6 pb-2">
      <div class="w-32 h-32 rounded-full overflow-hidden cursor-pointer border-2 border-purple-200 hover:border-purple-500 transition" onclick='openModal("${member.image}")'>
        <img src="${member.image}"
             class="w-full h-full object-cover"
             alt="${member.name}"
             onerror="this.src='images/faculty/user.webp'" />
      </div>
    </div>
    <div class="p-4 text-center">
      <h3 class="font-semibold text-gray-800 text-lg">
        ${member.name}
      </h3>
      <p class="text-sm text-gray-600 mt-1">
        ${member.qualification}
      </p>
      <p class="text-sm text-gray-500 mt-2 flex items-center justify-center gap-1">
        <span>📞</span> ${member.contact}
      </p>
    </div>
  `;

  return card;
}

// Populate teaching grid
const teachingGrid = document.getElementById("teachingGrid");
if (teachingGrid) {
  const teachingStaff = facultyData.filter((m) => m.type === "teaching");
  teachingStaff.forEach((member) => {
    teachingGrid.appendChild(createFacultyCard(member));
  });
}

// Populate non-teaching grid
const nonTeachingGrid = document.getElementById("nonTeachingGrid");
if (nonTeachingGrid) {
  const nonTeachingStaff = facultyData.filter((m) => m.type === "nonteaching");
  nonTeachingStaff.forEach((member) => {
    nonTeachingGrid.appendChild(createFacultyCard(member));
  });
}