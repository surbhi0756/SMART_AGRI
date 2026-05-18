// Rating Slider Live Update
const slider = document.getElementById("ratingSlider");
const ratingText = document.getElementById("ratingValue");

slider.oninput = function () {
  ratingText.innerText = `Rating: ${this.value} ⭐`;
};

// Add Achievement
function addAchievement() {
  const achievement = document.getElementById("achievementInput").value;

  if (!achievement) {
    alert("Enter an achievement");
    return;
  }

  const achievements = JSON.parse(localStorage.getItem("achievements")) || [];

  achievements.push(achievement);

  localStorage.setItem("achievements", JSON.stringify(achievements));

  displayAchievements();

  document.getElementById("achievementInput").value = "";
}

// Display Achievements
function displayAchievements() {
  const list = document.getElementById("achievementList");

  list.innerHTML = "";

  const achievements = JSON.parse(localStorage.getItem("achievements")) || [];

  achievements.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `🏆 ${item}`;

    list.appendChild(li);
  });
}

// Add Certification
function addCertificate() {
  const certificate = document.getElementById("certificateInput").value;

  if (!certificate) {
    alert("Enter certification name");
    return;
  }

  const certificates = JSON.parse(localStorage.getItem("certificates")) || [];

  certificates.push(certificate);

  localStorage.setItem("certificates", JSON.stringify(certificates));

  displayCertificates();

  document.getElementById("certificateInput").value = "";
}

// Display Certifications
function displayCertificates() {
  const list = document.getElementById("certificateList");

  list.innerHTML = "";

  const certificates = JSON.parse(localStorage.getItem("certificates")) || [];

  certificates.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `📜 ${item}`;

    list.appendChild(li);
  });
}

// Save Reputation Rating
function saveRating() {
  const rating = document.getElementById("ratingSlider").value;

  localStorage.setItem("communityRating", rating);

  document.getElementById("reputationResult").innerText =
    `⭐ Reputation Score Saved: ${rating}/5`;

  updateSummary();
}

// Update Summary
function updateSummary() {
  const achievements = JSON.parse(localStorage.getItem("achievements")) || [];

  const certificates = JSON.parse(localStorage.getItem("certificates")) || [];

  const rating = localStorage.getItem("communityRating") || "0";

  const visibility = localStorage.getItem("profileVisibility") || "Private";

  document.getElementById("summaryBox").innerHTML = `
        <p><strong>🏆 Total Achievements:</strong> ${achievements.length}</p>
        <p><strong>📜 Total Certifications:</strong> ${certificates.length}</p>
        <p><strong>⭐ Community Reputation:</strong> ${rating}/5</p>
        <p><strong>📤 Profile Visibility:</strong> ${visibility}</p>
    `;
}

// Load Existing Data
window.onload = function () {
  displayAchievements();
  displayCertificates();
  updateSummary();

  const savedRating = localStorage.getItem("communityRating");

  if (savedRating) {
    slider.value = savedRating;

    ratingText.innerText = `Rating: ${savedRating} ⭐`;
  }
};

// Save Profile Visibility
function saveVisibility() {

    const visibility =
        document.getElementById("profileVisibility").value;

    localStorage.setItem(
        "profileVisibility",
        visibility
    );

    let message = "";

    if (visibility === "private") {
        message =
            "🔒 Your profile is private.";
    }

    else if (visibility === "buyers") {
        message =
            "🛒 Your profile is now visible to buyers.";
    }

    else if (visibility === "cooperatives") {
        message =
            "🤝 Your profile is shared with cooperatives.";
    }

    else {
        message =
            "🌍 Your profile is now public.";
    }

    document.getElementById("visibilityResult")
        .innerText = message;

    updateSummary();
}