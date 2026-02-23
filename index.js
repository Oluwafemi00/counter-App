// State
let count = 0;
let entries = JSON.parse(localStorage.getItem("savedEntries")) || [];

// DOM Elements
const countEl = document.getElementById("count-el");
const tableBody = document.getElementById("table-body");

// Initial Render
updateUI();

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  if (count === 0) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  entries.push({ time: timeStr, value: count });
  count = 0;

  syncAndRender();
}

function undo() {
  entries.pop();
  syncAndRender();
}

function syncAndRender() {
  localStorage.setItem("savedEntries", JSON.stringify(entries));
  updateUI();
}

function updateUI() {
  countEl.textContent = count;
  tableBody.innerHTML = entries
    .map(
      (entry) => `
        <tr>
            <td>${entry.time}</td>
            <td>${entry.value}</td>
        </tr>
    `,
    )
    .reverse()
    .join(""); // Show newest first
}

function downloadCSV() {
  if (entries.length === 0) return alert("No data to download!");

  // Create CSV header and rows
  let csvContent = "Time,Count\n";
  entries.forEach((e) => {
    csvContent += `${e.time},${e.value}\n`;
  });

  // Create a downloadable link
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.setAttribute("href", url);
  a.setAttribute(
    "download",
    `counter_logs_${new Date().toLocaleDateString()}.csv`,
  );
  a.click();
}

function resetAll() {
  if (confirm("Clear all history?")) {
    localStorage.clear();
    entries = [];
    updateUI();
  }
}

// Event Listeners
document.getElementById("increment-btn").addEventListener("click", increment);
document.getElementById("save-btn").addEventListener("click", save);
document.getElementById("delete-btn").addEventListener("click", undo);
document.getElementById("download-btn").addEventListener("click", downloadCSV);
document.getElementById("reset-btn").addEventListener("click", resetAll);
