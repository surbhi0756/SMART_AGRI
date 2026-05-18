// Save Farmer Profile
function saveProfile() {
  const name = document.getElementById("farmerName").value;
  const location = document.getElementById("location").value;
  const farmSize = document.getElementById("farmSize").value;
  const crop = document.getElementById("mainCrop").value;

  if (!name || !location || !farmSize) {
    alert("Please fill all fields!");
    return;
  }

  const profileData = {
    name,
    location,
    farmSize,
    crop,
  };

  // Save in local storage
  localStorage.setItem("farmerProfile", JSON.stringify(profileData));

  displayProfile();
}

// Display Saved Profile
function displayProfile() {
  const data = JSON.parse(localStorage.getItem("farmerProfile"));

  if (data) {
    document.getElementById("profileSummary").innerHTML = `
            <p><strong>👨‍🌾 Name:</strong> ${data.name}</p>
            <p><strong>📍 Location:</strong> ${data.location}</p>
            <p><strong>🌾 Farm Size:</strong> ${data.farmSize} Acres</p>
            <p><strong>🌱 Main Crop:</strong> ${data.crop}</p>
        `;
  }
}

// Add Achievement
function addAchievement() {
  const achievement = prompt("Enter your farming achievement:");

  if (achievement) {
    const li = document.createElement("li");
    li.textContent = `🏅 ${achievement}`;

    document.getElementById("achievementList").appendChild(li);
  }
}

// Load profile when page opens
window.onload = displayProfile;
