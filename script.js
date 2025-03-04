// Task array to store tasks
let tasks = [
    { taskName: "Finish Bootstrap Project", dueDate: "2025-03-05", priority: "High" },
    { taskName: "Write Blog Post", dueDate: "2025-03-10", priority: "Medium" },
    { taskName: "Grocery Shopping", dueDate: "2025-03-12", priority: "Low" }
];

document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    // Validate input fields
    if (taskName === "" || dueDate === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Store task in the array
    const task = { taskName, dueDate, priority };
    tasks.push(task);

    // Render tasks
    renderTasks();

    // Clear the form
    document.getElementById("taskForm").reset();
});

// Function to render tasks
function renderTasks() {
    const taskTableBody = document.getElementById("taskTableBody");
    taskTableBody.innerHTML = ""; // Clear previous tasks

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.taskName}</td>
            <td>${task.dueDate}</td>
            <td>${task.priority}</td>
            <td>
                <button class="btn btn-delete btn-sm delete-btn" data-index="${index}">Delete</button>
            </td>
        `;

        taskTableBody.appendChild(row);
    });

    // Add event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            tasks.splice(index, 1); // Remove task from array
            renderTasks(); // Re-render tasks
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderTasks(); // Load tasks on page load
});

// Notes Section
document.getElementById("addNoteBtn").addEventListener("click", function () {
    const noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") return;

    const notesSection = document.getElementById("notesSection");
    const noteCard = document.createElement("div");
    noteCard.classList.add("col-md-3", "mb-3");
    noteCard.innerHTML = `
        <div class="card bg-warning text-dark">
            <div class="card-body">
                <p class="card-text">${noteText}</p>
                <button class="btn btn-delete btn-sm delete-note">Delete</button>
            </div>
        </div>
    `;

    notesSection.appendChild(noteCard);
    document.getElementById("noteInput").value = "";

    // Add delete functionality
    noteCard.querySelector(".delete-note").addEventListener("click", function () {
        noteCard.remove();
    });
});
