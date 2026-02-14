// achievements-page.js - Academic Toppers Data

document.addEventListener('DOMContentLoaded', function() {
  
  // Academic Toppers Data with all required fields
  const academicData = [
    {
      name: "Priya Kumari",
      class: "Class X",
      session: "2024-25",
      position: "1st Rank",
      percentage: "95.6%",
      image: "images/achievements/student.jpg",
      description: "State Topper in Science, awarded by Education Minister"
    },
    {
      name: "Rahul Kumar",
      class: "Class XII (Science)",
      session: "2024-25",
      position: "1st Rank",
      percentage: "94.8%",
      image: "images/achievements/student.jpg",
      description: "District Topper, selected for JEE Advanced coaching"
    },
    {
      name: "Anjali Singh",
      class: "Class XII (Arts)",
      session: "2023-24",
      position: "1st Rank",
      percentage: "92.3%",
      image: "images/achievements/student.jpg",
      description: "University Merit List, Gold Medalist in History"
    },
    {
      name: "Vikash Sharma",
      class: "Class X",
      session: "2023-24",
      position: "1st Rank",
      percentage: "93.5%",
      image: "images/achievements/student.jpg",
      description: "School Topper, Perfect score in Mathematics"
    },
    {
      name: "Sneha Gupta",
      class: "Class XII (Commerce)",
      session: "2022-23",
      position: "1st Rank",
      percentage: "91.7%",
      image: "images/achievements/student.jpg",
      description: "Best Student Award, Accounts subject topper"
    },
    {
      name: "Amit Kumar",
      class: "Class X",
      session: "2022-23",
      position: "1st Rank",
      percentage: "94.2%",
      image: "images/achievements/student.jpg",
      description: "Scholarship winner, represented school at state level"
    },
    {
      name: "Neha Singh",
      class: "Class XII (Science)",
      session: "2021-22",
      position: "1st Rank",
      percentage: "93.8%",
      image: "images/achievements/student.jpg",
      description: "Selected for MBBS, NEET qualified"
    },
    {
      name: "Rajesh Yadav",
      class: "Class X",
      session: "2021-22",
      position: "1st Rank",
      percentage: "92.9%",
      image: "images/achievements/student.jpg",
      description: "NTSE scholar, Science exhibition winner"
    },
    // Add more as needed
    {
      name: "Suman Kumari",
      class: "Class XII (Arts)",
      session: "2020-21",
      position: "1st Rank",
      percentage: "91.2%",
      image: "images/achievements/student.jpg",
      description: "Political Science topper, now pursuing BA LLB"
    },
    {
      name: "Ravi Ranjan",
      class: "Class X",
      session: "2020-21",
      position: "1st Rank",
      percentage: "93.1%",
      image: "images/achievements/student.jpg",
      description: "All-rounder, won debate competition"
    },
    {
      name: "Kiran Devi",
      class: "Class XII (Science)",
      session: "2019-20",
      position: "1st Rank",
      percentage: "92.7%",
      image: "images/achievements/student.jpg",
      description: "Biology topper, now in medical college"
    },
    {
      name: "Mohan Prasad",
      class: "Class X",
      session: "2019-20",
      position: "1st Rank",
      percentage: "90.8%",
      image: "images/achievements/student.jpg",
      description: "Mathematics Olympiad participant"
    }
  ];

  // Sports Achievements Data
  const sportsData = [
    {
      name: "Kabaddi Team",
      achievement: "District Level Champions",
      session: "2024-25",
      image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
      description: "Won Gold Medal in District Sports Meet"
    },
    {
      name: "Rajesh Kumar",
      achievement: "100m Race - 1st Place",
      session: "2024-25",
      image: "https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg",
      description: "District Athletics Meet"
    },
    {
      name: "Cricket Team",
      achievement: "Runners-up",
      session: "2023-24",
      image: "https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg",
      description: "Inter-School Cricket Tournament"
    },
    {
      name: "Priya Kumari",
      achievement: "Badminton - 1st Place",
      session: "2023-24",
      image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      description: "District Badminton Championship"
    }
  ];

  // Cultural Achievements Data
  const culturalData = [
    {
      name: "Anjali Singh",
      achievement: "1st Prize - Classical Dance",
      session: "2024-25",
      image: "https://images.pexels.com/photos/1767668/pexels-photo-1767668.jpeg",
      description: "District Youth Festival"
    },
    {
      name: "School Choir",
      achievement: "2nd Prize - Group Singing",
      session: "2024-25",
      image: "https://images.pexels.com/photos/6966/abstract-music-musician-sound.jpg",
      description: "State Level Competition"
    },
    {
      name: "Rahul Sharma",
      achievement: "1st Prize - Debate Competition",
      session: "2023-24",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
      description: "Inter-School Debate"
    },
    {
      name: "Drama Team",
      achievement: "Best Production",
      session: "2023-24",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
      description: "Annual Cultural Fest"
    }
  ];

  // Science Achievements Data
  const scienceData = [
    {
      name: "Science Club",
      achievement: "Participated in State Science Exhibition",
      session: "2024-25",
      image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
      description: "Project on Renewable Energy"
    },
    {
      name: "Vikram Singh",
      achievement: "1st Prize - Quiz Competition",
      session: "2024-25",
      image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg",
      description: "District Science Quiz"
    },
    {
      name: "Neha Gupta",
      achievement: "Best Innovation Award",
      session: "2023-24",
      image: "https://images.pexels.com/photos/373883/pexels-photo-373883.jpeg",
      description: "Water Conservation Project"
    }
  ];

  // Other Achievements Data
  const otherData = [
    {
      name: "NCC Cadets",
      achievement: "Selected for Republic Day Camp",
      session: "2024-25",
      image: "https://images.pexels.com/photos/7713368/pexels-photo-7713368.jpeg",
      description: "Represented Jharkhand"
    },
    {
      name: "Scout & Guide Team",
      achievement: "Rajya Puraskar Award",
      session: "2023-24",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg",
      description: "For Community Service"
    },
    {
      name: "Rohan Kumar",
      achievement: "NSS Volunteer Award",
      session: "2023-24",
      image: "https://images.pexels.com/photos/7841805/pexels-photo-7841805.jpeg",
      description: "Best Volunteer in District"
    }
  ];

  // Function to create academic card with all fields
  function createAcademicCard(item) {
    const card = document.createElement("div");
    card.className = "bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition";

    card.innerHTML = `
      <div class="aspect-[16/9] overflow-hidden bg-gray-200">
        <img 
          src="${item.image}" 
          alt="${item.name}"
          class="w-full h-full object-cover"
          onerror="this.src='images/achievements/student.jpg'"
        />
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-gray-800 text-lg mb-1">${item.name}</h3>
        <div class="space-y-1 text-sm">
          <p><span class="font-medium text-purple-700">Class:</span> ${item.class}</p>
          <p><span class="font-medium text-purple-700">Session:</span> ${item.session}</p>
          <p><span class="font-medium text-purple-700">Position:</span> ${item.position}</p>
          <p><span class="font-medium text-purple-700">Percentage:</span> <span class="text-green-600 font-semibold">${item.percentage}</span></p>
        </div>
        ${item.description ? `
          <div class="mt-3 pt-3 border-t border-gray-200">
            <p class="text-xs text-gray-600">${item.description}</p>
          </div>
        ` : ''}
      </div>
    `;

    return card;
  }

  // Function to create achievement card (consistent with faculty card style)
  function createAchievementCard(item) {
    const card = document.createElement("div");
    card.className = "bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition";

    card.innerHTML = `
      <div class="aspect-[16/9] overflow-hidden bg-gray-200">
        <img 
          src="${item.image}" 
          alt="${item.name}"
          class="w-full h-full object-cover"
          onerror="this.src='images/achievements/student.jpg'"
        />
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-gray-800 text-lg mb-1">${item.name}</h3>
        <p class="text-sm text-purple-600 font-medium mb-2">${item.achievement}</p>
        <p class="text-xs text-gray-500 mb-2">Session: ${item.session}</p>
        ${item.description ? `<p class="text-sm text-gray-600 border-t pt-2 mt-2">${item.description}</p>` : ''}
      </div>
    `;

    return card;
  }

  // Populate Academic Grid
  const academicGrid = document.getElementById("academicGrid");
  if (academicGrid) {
    academicData.forEach(item => {
      academicGrid.appendChild(createAcademicCard(item));
    });
  }

  // Populate Sports Grid
  const sportsGrid = document.getElementById("sportsGrid");
  if (sportsGrid) {
    sportsData.forEach(item => {
      sportsGrid.appendChild(createAchievementCard(item));
    });
  }

  // Populate Cultural Grid
  const culturalGrid = document.getElementById("culturalGrid");
  if (culturalGrid) {
    culturalData.forEach(item => {
      culturalGrid.appendChild(createAchievementCard(item));
    });
  }

  // Populate Science Grid
  const scienceGrid = document.getElementById("scienceGrid");
  if (scienceGrid) {
    scienceData.forEach(item => {
      scienceGrid.appendChild(createAchievementCard(item));
    });
  }

  // Populate Other Grid
  const otherGrid = document.getElementById("otherGrid");
  if (otherGrid) {
    otherData.forEach(item => {
      otherGrid.appendChild(createAchievementCard(item));
    });
  }
});