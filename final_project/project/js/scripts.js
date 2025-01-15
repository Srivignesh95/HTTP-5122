// Global variables
var lineChartInstance, pieChartInstance;

// Initialize sleep data
var sleepData = JSON.parse(sessionStorage.getItem('sleepData')) || [
  { date: '2024-12-15', sleepTime: '21:00', wakeTime: '06:00', quality: 'Good', mood: 'Energetic' },
  { date: '2024-12-16', sleepTime: '22:00', wakeTime: '05:30', quality: 'Moderate', mood: 'Neutral' },
  { date: '2024-12-17', sleepTime: '23:00', wakeTime: '07:00', quality: 'Bad', mood: 'Tired' },
];

// Utility functions
var getCurrentWeek = function () {
  var now = new Date();
  var start = new Date(now.setDate(now.getDate() - now.getDay()));
  start.setHours(0, 0, 0, 0);
  var end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return { start: start, end: end };
};

var filterCurrentWeekData = function (data) {
  var week = getCurrentWeek();
  return data.filter(function (entry) {
    var entryDate = new Date(entry.date);
    return entryDate >= week.start && entryDate <= week.end;
  });
};

var calculateHours = function (sleepTime, wakeTime) {
  var sleep = new Date(`1970-01-01T${sleepTime}`);
  var wake = new Date(`1970-01-01T${wakeTime}`);
  var hours = (wake - sleep) / (1000 * 60 * 60);
  return hours < 0 ? hours + 24 : hours;
};

// Toggle Form Popup Visibility
var toggleFormPopup = function () {
  var formPopup = document.getElementById('formPopup');
  formPopup.style.display = formPopup.style.display === 'block' ? 'none' : 'block';
};

// Initialize Line Chart (This Week's Data Only)
var initializeLineChart = function () {
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayHoursMap = weekDays.reduce(function (map, day) {
    map[day] = 0;
    return map;
  }, {});

  var currentWeekData = filterCurrentWeekData(sleepData);

  currentWeekData.forEach(function (data) {
    var dayName = new Date(data.date).toLocaleDateString('en-US', { weekday: 'long' });
    if (dayHoursMap[dayName] !== undefined) dayHoursMap[dayName] = calculateHours(data.sleepTime, data.wakeTime);
  });

  var data = {
    labels: weekDays,
    datasets: [{
      label: 'Hours of Sleep',
      data: weekDays.map(function (day) { return dayHoursMap[day]; }),
      borderColor: '#6733cc',
      backgroundColor: 'rgba(103, 51, 204, 0.1)',
      borderWidth: 4,
      tension: 0.3,
    }],
  };

  var options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 0, max: 12, ticks: { callback: function (value) { return `${value} hrs`; } } },
    },
  };

  var ctx = document.getElementById('lineChart').getContext('2d');
  if (lineChartInstance) lineChartInstance.destroy();
  lineChartInstance = new Chart(ctx, { type: 'line', data: data, options: options });
};

// Initialize Pie Chart (This Week's Data Only)
var initializePieChart = function () {
  var currentWeekData = filterCurrentWeekData(sleepData);
  var qualityCounts = currentWeekData.reduce(function (counts, entry) {
    counts[entry.quality] = (counts[entry.quality] || 0) + 1;
    return counts;
  }, { Good: 0, Moderate: 0, Bad: 0 });

  var data = {
    labels: ['Good', 'Moderate', 'Bad'],
    datasets: [{
      data: [qualityCounts.Good, qualityCounts.Moderate, qualityCounts.Bad],
      backgroundColor: ['#6733cc', '#4da8da', '#ff5252'],
    }],
  };

  var options = { responsive: true, plugins: { legend: { position: 'bottom' } } };

  var ctx = document.getElementById('pieChart').getContext('2d');
  if (pieChartInstance) pieChartInstance.destroy();
  pieChartInstance = new Chart(ctx, { type: 'pie', data: data, options: options });

  updatePercentages(currentWeekData, qualityCounts);
};

// Update Percentages (This Week's Data Only)
var updatePercentages = function (currentWeekData, qualityCounts) {
  var totalEntries = currentWeekData.length;
  var goodPercentage = ((qualityCounts.Good / totalEntries) * 100).toFixed(2) || 0;
  var moderatePercentage = ((qualityCounts.Moderate / totalEntries) * 100).toFixed(2) || 0;
  var badPercentage = ((qualityCounts.Bad / totalEntries) * 100).toFixed(2) || 0;

  document.getElementById('good-percentage').textContent = `${goodPercentage}%`;
  document.getElementById('moderate-percentage').textContent = `${moderatePercentage}%`;
  document.getElementById('bad-percentage').textContent = `${badPercentage}%`;
};

// Update Table (This Week's Data Only)
var populateTable = function () {
  var tableBody = document.getElementById('data-table-body');
  var currentWeekData = filterCurrentWeekData(sleepData);

  tableBody.innerHTML = '';
  if (currentWeekData.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6">No data available for this week.</td></tr>';
    return;
  }

  currentWeekData.forEach(function (entry, index) {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${new Date(entry.date).toLocaleDateString()}</td>
        <td>${entry.sleepTime}</td>
        <td>${entry.wakeTime}</td>
        <td>${entry.quality}</td>
        <td>${entry.mood}</td>
      </tr>`;
  });
};

// Update Total Hours (This Week's Data Only)
var updateTotalHours = function () {
  var currentWeekData = filterCurrentWeekData(sleepData);
  var totalHours = currentWeekData.reduce(function (sum, entry) {
    return sum + calculateHours(entry.sleepTime, entry.wakeTime);
  }, 0);

  document.getElementById('total-hours').textContent = `${totalHours.toFixed(2)} hrs`;
};

// Add or Update Data
var updateOrAddData = function (newEntry) {
  var normalizedDate = new Date(newEntry.date).toISOString().split('T')[0];
  var index = sleepData.findIndex(function (entry) {
    return new Date(entry.date).toISOString().split('T')[0] === normalizedDate;
  });
  if (index !== -1) {
    sleepData[index] = { ...sleepData[index], ...newEntry };
  } else {
    sleepData.push({ date: normalizedDate, ...newEntry });
  }
};

// Clear All Data
var clearData = function () {
  sleepData = [];
  sessionStorage.removeItem('sleepData');
  populateTable();
  initializeLineChart();
  initializePieChart();
  updateTotalHours();
  alert('All data has been cleared!');
};

// DOM Initialization
document.addEventListener('DOMContentLoaded', function () {
  populateTable();
  initializeLineChart();
  initializePieChart();
  updateTotalHours();

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var newEntry = {
      date: document.getElementById('date').value,
      sleepTime: document.getElementById('sleep-time').value,
      wakeTime: document.getElementById('wake-up-time').value,
      quality: document.getElementById('quality').value,
      mood: document.getElementById('mood').value,
    };
    updateOrAddData(newEntry);
    sessionStorage.setItem('sleepData', JSON.stringify(sleepData));
    populateTable();
    initializeLineChart();
    initializePieChart();
    updateTotalHours();
    toggleFormPopup();
    document.querySelector('form').reset();
  });

  document.getElementById('clearData').addEventListener('click', clearData);
});
