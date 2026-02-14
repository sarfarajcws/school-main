// ================= ACHIEVEMENT DATA =================
const achievementsData = [
  {
    id: 1,
    name: "Priya Kumari",
    class: "Class X",
    session: "2024-25",
    position: "1st Rank",
    percentage: "95.6%",
    image: "images/achievements/student.jpg",
    description: "State Topper in Science"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    class: "Class XII (Science)",
    session: "2024-25",
    position: "1st Rank",
    percentage: "94.8%",
    image: "images/achievements/student.jpg",
    description: "District Topper"
  },
  {
    id: 3,
    name: "Anjali Singh",
    class: "Class XII (Arts)",
    session: "2023-24",
    position: "1st Rank",
    percentage: "92.3%",
    image: "images/achievements/student.jpg",
    description: "University Merit List"
  },
  {
    id: 4,
    name: "Vikash Sharma",
    class: "Class X",
    session: "2023-24",
    position: "1st Rank",
    percentage: "93.5%",
    image: "images/achievements/student.jpg",
    description: "School Topper"
  }
];

// ================= CREATE CARD (UNCHANGED FORMAT) =================
function createAchievementCard(achievement) {
  const card = document.createElement("div");
  card.className =
    "w-72 bg-white border rounded-lg shadow-sm overflow-hidden flex-shrink-0 hover:shadow-md transition select-none";

  card.innerHTML = `
    <div class="relative">
      <div class="w-full h-48 overflow-hidden bg-gray-200">
        <img 
          src="${achievement.image}" 
          alt="${achievement.name}"
          class="w-full h-full object-cover"
          draggable="false"
        />
      </div>
      
      <div class="absolute top-3 right-3 bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
        ${achievement.position}
      </div>
    </div>
    
    <div class="p-5">
      <h3 class="font-bold text-gray-800 text-xl mb-2">${achievement.name}</h3>
      
      <div class="space-y-2 text-gray-600">
        <div class="flex items-center gap-2">
          <span class="text-gray-800 font-medium min-w-16">Class:</span>
          <span>${achievement.class}</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-gray-800 font-medium min-w-16">Session:</span>
          <span>${achievement.session}</span>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-gray-800 font-medium min-w-16">Score:</span>
          <span class="font-semibold text-gray-600">${achievement.percentage}</span>
        </div>
        
        ${achievement.description ? `
        <div class="mt-3 pt-3 border-t border-gray-200">
          <p class="text-sm text-gray-800 font-medium">
            🏆 ${achievement.description}
          </p>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  return card;
}

// ================= MAIN =================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("achievementTrack");
  if (!track) return;

  // Duplicate for infinite effect
  achievementsData.forEach(item =>
    track.appendChild(createAchievementCard(item))
  );
  achievementsData.forEach(item =>
    track.appendChild(createAchievementCard(item))
  );

  // ================= DRAG CONTROL =================
  let isDragging = false;
  let startX;
  let currentTranslate = 0;

  function pauseAnimation() {
    track.style.animationPlayState = "paused";
  }

  function resumeAnimation() {
    track.style.removeProperty("transform");
    track.style.animationPlayState = "running";
  }

  // Mouse
  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    pauseAnimation();
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const move = e.pageX - startX;
    startX = e.pageX;

    currentTranslate += move;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    resumeAnimation();
  });

  // Touch
  track.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    pauseAnimation();
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const move = e.touches[0].pageX - startX;
    startX = e.touches[0].pageX;

    currentTranslate += move;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  track.addEventListener("touchend", () => {
    isDragging = false;
    resumeAnimation();
  });
});