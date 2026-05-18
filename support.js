// ------------------------------
// Contact Support
// ------------------------------

function submitSupport() {
  const name = document.getElementById("supportName").value;

  const message = document.getElementById("supportMessage").value;

  if (!name || !message) {
    alert("Fill all fields");
    return;
  }

  document.getElementById("supportResult").innerText =
    `✅ Support request submitted for ${name}`;
}

// ------------------------------
// Chatbot Assistant
// ------------------------------

function sendMessage() {
  const input = document.getElementById("chatInput");

  const chatBox = document.getElementById("chatBox");

  const userMessage = document.createElement("div");

  userMessage.classList.add("user-message");

  userMessage.innerText = input.value;

  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");

  botMessage.classList.add("bot-message");

  let reply = "";

  const text = input.value.toLowerCase();

  if (text.includes("water")) {
    reply = "💧 Use drip irrigation for better water efficiency.";
  } else if (text.includes("subsidy")) {
    reply = "🏛️ Check the Government Schemes section for eligibility.";
  } else if (text.includes("fertilizer")) {
    reply = "🌱 Organic compost can improve soil health.";
  } else {
    reply = "🤖 Our AI assistant will guide you soon.";
  }

  botMessage.innerText = reply;

  chatBox.appendChild(botMessage);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}

// ------------------------------
// Collaboration Workspace
// ------------------------------

function createWorkspace() {
  const name = document.getElementById("workspaceName").value;

  const message = document.getElementById("workspaceMessage").value;

  if (!name || !message) {
    alert("Fill all workspace fields");
    return;
  }

  const board = document.getElementById("workspaceBoard");

  const div = document.createElement("div");

  div.classList.add("workspace-post");

  div.innerHTML = `
        <h3>🤝 ${name}</h3>
        <p>${message}</p>
    `;

  board.prepend(div);

  document.getElementById("workspaceName").value = "";
  document.getElementById("workspaceMessage").value = "";
}

// ------------------------------
// Video Conference
// ------------------------------

function startMeeting() {
  document.getElementById("meetingStatus").innerText =
    "🎥 Meeting room created successfully.";
}

// ------------------------------
// Shared Whiteboard
// ------------------------------

function saveWhiteboard() {
  const notes = document.getElementById("whiteboard").value;

  localStorage.setItem("whiteboardNotes", notes);

  document.getElementById("whiteboardResult").innerText =
    "🖍️ Whiteboard notes saved.";
}

// ------------------------------
// AI Meeting Summary
// ------------------------------

function generateSummary() {
  const notes = document.getElementById("meetingNotes").value;

  if (!notes) {
    alert("Enter meeting notes");
    return;
  }

  let summary = notes.split(".").slice(0, 2).join(".") + ".";

  document.getElementById("summaryResult").innerHTML = `
            <div class="summary-box">
                <strong>🧠 AI Summary:</strong>
                <p>${summary}</p>
            </div>
        `;
}
