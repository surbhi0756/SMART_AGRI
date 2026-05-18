// Save Farmer Details
function saveProfile() {
  const name = document.getElementById("farmerName").value;
  const village = document.getElementById("village").value;
  const land = document.getElementById("landSize").value;

  if (!name || !village || !land) {
    alert("Please fill all details");
    return;
  }

  const profile = {
    name,
    village,
    land,
  };

  localStorage.setItem("farmerDashboardProfile", JSON.stringify(profile));

  updateSummary();
}

// Add Crop History
function addCropHistory() {
  const crop = document.getElementById("cropName").value;
  const season = document.getElementById("season").value;

  if (!crop || !season) {
    alert("Enter crop and season");
    return;
  }

  const cropHistory = JSON.parse(localStorage.getItem("cropHistory")) || [];

  cropHistory.push({
    crop,
    season,
  });

  localStorage.setItem("cropHistory", JSON.stringify(cropHistory));

  displayCropHistory();
}

// Display Crop History
function displayCropHistory() {
  const cropList = document.getElementById("cropHistoryList");

  cropList.innerHTML = "";

  const cropHistory = JSON.parse(localStorage.getItem("cropHistory")) || [];

  cropHistory.forEach((item) => {
    const li = document.createElement("li");

    li.textContent = `🌾 ${item.crop} - ${item.season}`;

    cropList.appendChild(li);
  });
}

// Check Subsidy Eligibility
function checkEligibility() {
  const crop = document.getElementById("cropType").value;

  const profile = JSON.parse(localStorage.getItem("farmerDashboardProfile"));

  let message = "";

  if (!profile) {
    message = "⚠️ Save farmer details first";
  } else {
    const land = parseFloat(profile.land);

    if (land < 2) {
      message += "Eligible for Small Farmer Subsidy Scheme\n";
    } else if (land <= 5) {
      message += "Eligible for Medium Farmer Support\n";
    } else {
      message += "Eligible for Large Farm Support Program\n";
    }

    if (crop === "Rare Spices") {
      message += "\n🌶️ Eligible for Rare Spice Promotion Scheme";
    } else {
      message += "\n🌱 Eligible for General Crop Support";
    }
  }

  document.getElementById("eligibilityResult").innerText = message;
}

// Dashboard Summary
function updateSummary() {
  const profile = JSON.parse(localStorage.getItem("farmerDashboardProfile"));

  const crops = JSON.parse(localStorage.getItem("cropHistory")) || [];

  if (profile) {
    document.getElementById("summary").innerHTML = `
            <p><strong>👨‍🌾 Farmer:</strong> ${profile.name}</p>
            <p><strong>📍 Village:</strong> ${profile.village}</p>
            <p><strong>🌾 Land Size:</strong> ${profile.land} Acres</p>
            <p><strong>📈 Total Crop Records:</strong> ${crops.length}</p>
        `;
  }
}

// Load Saved Data
window.onload = function () {
  displayCropHistory();
  updateSummary();
};
