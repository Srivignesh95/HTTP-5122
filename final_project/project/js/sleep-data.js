document.addEventListener('DOMContentLoaded', function () {
  // Fetch sleepData from sessionStorage or initialize with default data
  var sleepData = JSON.parse(sessionStorage.getItem('sleepData')) || [
    { date: '2024-12-15', sleepTime: '21:00', wakeTime: '06:00', quality: 'Good', mood: 'Energetic' },
    { date: '2024-12-16', sleepTime: '22:00', wakeTime: '05:30', quality: 'Moderate', mood: 'Neutral' },
    { date: '2024-12-17', sleepTime: '23:00', wakeTime: '07:00', quality: 'Bad', mood: 'Tired' },
  ];
  // Save default data to sessionStorage if it was empty
  sessionStorage.setItem('sleepData', JSON.stringify(sleepData));

  var currentWeekOffset = 0; // Tracks the displayed week offset
  var prevWeekButton = document.getElementById('prev-week');
  var nextWeekButton = document.getElementById('next-week');
  var tableBody = document.getElementById('data-table-body');

  // Event Listeners for Pagination
  prevWeekButton?.addEventListener('click', () => updateTable(--currentWeekOffset));
  nextWeekButton?.addEventListener('click', () => updateTable(++currentWeekOffset));

  // Update the table on initial load
  updateTable(currentWeekOffset);

  function updateTable(offset) {
    if (!tableBody) return;

    var weekData = getWeekData(offset);
    tableBody.innerHTML = weekData.length
      ? weekData.map((entry, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${new Date(entry.date).toLocaleDateString('en-US')}</td>
            <td>${entry.sleepTime}</td>
            <td>${entry.wakeTime}</td>
            <td>${entry.quality}</td>
            <td>${entry.mood}</td>
          </tr>
        `).join('')
      : '<tr><td colspan="6">No data available for this week.</td></tr>';

    updatePaginationVisibility(offset);
  }

  function getWeekData(offset) {
    var { start, end } = getWeekStartAndEnd(offset);
    return sleepData.filter(({ date }) => {
      var entryDate = new Date(date);
      return entryDate >= start && entryDate <= end;
    });
  }

  function getWeekStartAndEnd(offset) {
    var now = new Date();
    var diffToSunday = -now.getDay() + offset * 7;
    var start = new Date(now.setDate(now.getDate() + diffToSunday));
    start.setHours(0, 0, 0, 0);
    var end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start, end };
  }

  function updatePaginationVisibility(offset) {
    var { start, end } = getWeekStartAndEnd(offset);

    if (prevWeekButton) {
      prevWeekButton.style.display = sleepData.some(({ date }) => new Date(date) < start) ? 'block' : 'none';
    }

    if (nextWeekButton) {
      nextWeekButton.style.display = sleepData.some(({ date }) => new Date(date) > end) ? 'block' : 'none';
    }
  }
});
