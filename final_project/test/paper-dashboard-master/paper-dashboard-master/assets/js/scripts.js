document.addEventListener("DOMContentLoaded", () => {
  const popupForm = document.getElementById("popupForm");
  const addDataBtn = document.getElementById("addDataBtn");
  const sleepForm = document.getElementById("sleepForm");
  const sleepTable = document.getElementById("sleepTable").querySelector("tbody");

  // Hardcoded Data
  const initialData = [
    { date: "2024-12-01", sleepTime: "22:00", wakeTime: "06:00", quality: "Good", mood: "Energetic" },
    { date: "2024-12-02", sleepTime: "23:00", wakeTime: "07:00", quality: "Moderate", mood: "Neutral" },
    { date: "2024-12-03", sleepTime: "21:30", wakeTime: "05:30", quality: "Bad", mood: "Tired" },
  ];

  // Load session data or initialize with hardcoded data
  let sleepData = JSON.parse(sessionStorage.getItem("sleepData")) || initialData;

  // Display popup form
  addDataBtn.addEventListener("click", () => {
    popupForm.style.display = "block";
  });

  // Hide popup form
  popupForm.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none";
    }
  });

  // Render table
  function renderTable() {
    sleepTable.innerHTML = ""; // Clear existing rows
    sleepData.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.date}</td>
        <td>${entry.sleepTime}</td>
        <td>${entry.wakeTime}</td>
        <td>${entry.quality}</td>
        <td>${entry.mood}</td>
      `;
      sleepTable.appendChild(row);
    });
  }

  // Add new data
  sleepForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newData = {
      date: document.getElementById("date").value,
      sleepTime: document.getElementById("sleepTime").value,
      wakeTime: document.getElementById("wakeTime").value,
      quality: document.getElementById("quality").value,
      mood: document.getElementById("mood").value,
    };
    sleepData.push(newData);
    sessionStorage.setItem("sleepData", JSON.stringify(sleepData)); // Save to session storage
    renderTable();
    sleepForm.reset();
    popupForm.style.display = "none";
  });

  // Initial render
  renderTable();

  // Function to initialize the Line Chart
  function renderLineChart() {
    const ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
          {
            label: "Hours of Sleep",
            data: [6, 7, 8, 5, 6.5, 7.5, 8],
            borderColor: "rgba(98, 0, 234, 0.8)",
            backgroundColor: "rgba(98, 0, 234, 0.2)",
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 2,
            },
          },
        },
      },
    });
  }

  // Function to initialize the Pie Chart
  function renderPieChart() {
    const ctx = document.getElementById("pieChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Good", "Moderate", "Bad"],
        datasets: [
          {
            data: [60, 20, 20],
            backgroundColor: [
              "rgba(98, 234, 123, 0.9)", // Good
              "rgba(234, 183, 98, 0.9)", // Moderate
              "rgba(234, 98, 98, 0.9)",  // Bad
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });
  }

  // Call the chart rendering functions
  renderLineChart();
  renderPieChart();
});
