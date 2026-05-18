// ------------------------------
// Peer-to-Peer Q&A
// ------------------------------

function addQuestion() {
  const question = document.getElementById("questionInput").value;

  if (!question) {
    alert("Enter a question");
    return;
  }

  const questions = JSON.parse(localStorage.getItem("questions")) || [];

  questions.push(question);

  localStorage.setItem("questions", JSON.stringify(questions));

  displayQuestions();

  document.getElementById("questionInput").value = "";
}

function displayQuestions() {
  const container = document.getElementById("questionList");

  container.innerHTML = "";

  const questions = JSON.parse(localStorage.getItem("questions")) || [];

  questions.reverse().forEach((question) => {
    const div = document.createElement("div");

    div.classList.add("post-box");

    div.innerHTML = `
            <h3>❓ Question</h3>
            <p>${question}</p>
        `;

    container.appendChild(div);
  });
}

// ------------------------------
// Success Stories
// ------------------------------

function addStory() {
  const title = document.getElementById("storyTitle").value;

  const message = document.getElementById("storyMessage").value;

  if (!title || !message) {
    alert("Fill all story fields");
    return;
  }

  const stories = JSON.parse(localStorage.getItem("stories")) || [];

  stories.push({
    title,
    message,
  });

  localStorage.setItem("stories", JSON.stringify(stories));

  displayStories();

  document.getElementById("storyTitle").value = "";
  document.getElementById("storyMessage").value = "";
}

function displayStories() {
  const container = document.getElementById("storyList");

  container.innerHTML = "";

  const stories = JSON.parse(localStorage.getItem("stories")) || [];

  stories.reverse().forEach((story) => {
    const div = document.createElement("div");

    div.classList.add("post-box");

    div.innerHTML = `
            <h3>🏆 ${story.title}</h3>
            <p>${story.message}</p>
        `;

    container.appendChild(div);
  });
}

// ------------------------------
// Innovation Sharing
// ------------------------------

function addInnovation() {
  const title = document.getElementById("innovationTitle").value;

  const message = document.getElementById("innovationMessage").value;

  if (!title || !message) {
    alert("Fill all innovation fields");
    return;
  }

  const innovations = JSON.parse(localStorage.getItem("innovations")) || [];

  innovations.push({
    title,
    message,
  });

  localStorage.setItem("innovations", JSON.stringify(innovations));

  displayInnovations();

  document.getElementById("innovationTitle").value = "";
  document.getElementById("innovationMessage").value = "";
}

function displayInnovations() {
  const container = document.getElementById("innovationList");

  container.innerHTML = "";

  const innovations = JSON.parse(localStorage.getItem("innovations")) || [];

  innovations.reverse().forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("post-box");

    div.innerHTML = `
            <h3>💡 ${item.title}</h3>
            <p>${item.message}</p>
        `;

    container.appendChild(div);
  });
}

// ------------------------------
// Load Saved Data
// ------------------------------

window.onload = function () {
  displayQuestions();
  displayStories();
  displayInnovations();
};

// ------------------------------
// Crop Discussion Boards
// ------------------------------

function addDiscussion() {

    const topic =
        document.getElementById("cropTopic").value;

    const message =
        document.getElementById("discussionMessage").value;

    if (!message) {
        alert("Enter discussion message");
        return;
    }

    const discussions =
        JSON.parse(localStorage.getItem("cropDiscussions")) || [];

    discussions.push({
        topic,
        message,
        moderated: true
    });

    localStorage.setItem(
        "cropDiscussions",
        JSON.stringify(discussions)
    );

    displayDiscussions();

    document.getElementById("discussionMessage").value = "";
}


function displayDiscussions() {

    const board =
        document.getElementById("discussionBoard");

    board.innerHTML = "";

    const discussions =
        JSON.parse(localStorage.getItem("cropDiscussions")) || [];

    discussions.reverse().forEach(post => {

        const div = document.createElement("div");

        div.classList.add("discussion-post");

        div.innerHTML = `
            <div class="moderator-tag">
                ✅ Moderated Discussion
            </div>

            <h3>🌾 ${post.topic}</h3>

            <p>${post.message}</p>
        `;

        board.appendChild(div);
    });
}

// ------------------------------
// Gamified Contributor Badges
// ------------------------------

function assignBadge() {

    const user =
        document.getElementById("badgeUser").value;

    const type =
        document.getElementById("badgeType").value;

    if (!user) {
        alert("Enter contributor name");
        return;
    }

    let badgeName = "";

    if (type === "helper") {
        badgeName = "🤝 Helpful Farmer";
    }

    else if (type === "innovator") {
        badgeName = "💡 Innovation Leader";
    }

    else if (type === "mentor") {
        badgeName = "🏆 Community Mentor";
    }

    else {
        badgeName = "🌾 Crop Expert";
    }

    const badges =
        JSON.parse(localStorage.getItem("communityBadges")) || [];

    badges.push({
        user,
        badgeName
    });

    localStorage.setItem(
        "communityBadges",
        JSON.stringify(badges)
    );

    displayBadges();

    document.getElementById("badgeUser").value = "";
}


function displayBadges() {

    const board =
        document.getElementById("badgeBoard");

    board.innerHTML = "";

    const badges =
        JSON.parse(localStorage.getItem("communityBadges")) || [];

    badges.reverse().forEach(item => {

        const div = document.createElement("div");

        div.classList.add("badge-card");

        div.innerHTML = `
            <h3>👨‍🌾 ${item.user}</h3>

            <div class="badge">
                ${item.badgeName}
            </div>
        `;

        board.appendChild(div);
    });
}