document.addEventListener('DOMContentLoaded', function () {
    // Fetch sleepData from sessionStorage or initialize with default data
    var sleepData = JSON.parse(sessionStorage.getItem('sleepData')) || [
        { date: '2024-12-15', sleepTime: '21:00', wakeTime: '06:00', quality: 'Good', mood: 'Energetic' },
        { date: '2024-12-16', sleepTime: '22:00', wakeTime: '05:30', quality: 'Moderate', mood: 'Neutral' },
        { date: '2024-12-17', sleepTime: '23:00', wakeTime: '07:00', quality: 'Bad', mood: 'Tired' },
    ];

    if (!sessionStorage.getItem('sleepData')) {
        sessionStorage.setItem('sleepData', JSON.stringify(sleepData));
    }

    // Helper function to calculate hours of sleep
    function calculateHours(sleepTime, wakeTime) {
        var sleep = new Date("1970-01-01T" + sleepTime);
        var wake = new Date("1970-01-01T" + wakeTime);
        var hours = (wake - sleep) / (1000 * 60 * 60);
        return hours < 0 ? hours + 24 : hours;
    }

    // Helper function to filter data for the current week
    function getCurrentWeekData(data) {
        var currentDate = new Date();
        var startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        startOfWeek.setHours(0, 0, 0, 0);

        var endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        return data.filter(function (entry) {
            var entryDate = new Date(entry.date);
            return entryDate >= startOfWeek && entryDate <= endOfWeek;
        });
    }

    // Helper function to find the best sleep nights for the current week
    function getBestSleepNightsForCurrentWeek(data) {
        var currentWeekData = getCurrentWeekData(data);
        var bestNights = currentWeekData.filter(function (entry) {
            return entry.quality === 'Good';
        });
        return bestNights.map(function (entry) {
            return {
                date: entry.date,
                sleepHours: calculateHours(entry.sleepTime, entry.wakeTime)
            };
        }).sort(function (a, b) {
            return b.sleepHours - a.sleepHours;
        });
    }

    // Helper function to generate suggestions for improving sleep quality
    function generateSleepSuggestions(data) {
        var averageSleepTime = data.reduce(function (sum, entry) {
            return sum + calculateHours(entry.sleepTime, entry.wakeTime);
        }, 0) / data.length;

        var tips = [];
        if (averageSleepTime < 7) {
            tips.push("Try to ensure at least 7 hours of sleep per night.");
        }
        if (data.some(function (entry) {
            return entry.quality === 'Bad';
        })) {
            tips.push("Avoid caffeine or heavy meals before bedtime.");
        }
        if (data.some(function (entry) {
            return new Date("1970-01-01T" + entry.sleepTime) > new Date("1970-01-01T22:00");
        })) {
            tips.push("Consider going to bed earlier for better rest.");
        }
        return tips;
    }

    // Filter data for the current week
    var currentWeekData = getCurrentWeekData(sleepData);

    // Prepare data for the graph
    var labels = currentWeekData.map(function (entry) {
        return new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' });
    });

    var sleepQualityScores = currentWeekData.map(function (entry) {
        if (entry.quality === 'Good') return 3;
        if (entry.quality === 'Moderate') return 2;
        if (entry.quality === 'Bad') return 1;
        return 0;
    });

    var moodScores = currentWeekData.map(function (entry) {
        if (entry.mood === 'Energetic') return 3;
        if (entry.mood === 'Neutral') return 2;
        if (entry.mood === 'Tired') return 1;
        return 0;
    });

    // Initialize the chart
    var ctx = document.getElementById('qualityMoodChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Quality of Sleep',
                    data: sleepQualityScores,
                    borderColor: 'rgba(103, 51, 204, 1)',
                    backgroundColor: 'rgba(103, 51, 204, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                },
                {
                    label: 'Quality of Mood',
                    data: moodScores,
                    borderColor: 'rgba(77, 168, 218, 1)',
                    backgroundColor: 'rgba(77, 168, 218, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 3,
                    ticks: {
                        stepSize: 1,
                        callback: function (value) {
                            if (value === 3) return 'High';
                            if (value === 2) return 'Moderate';
                            if (value === 1) return 'Low';
                            return '';
                        },
                    },
                },
            },
        },
    });

    // Display best sleep nights for the current week
    var bestSleepContainer = document.getElementById('best-sleep-nights');
    var bestNights = getBestSleepNightsForCurrentWeek(sleepData);
    bestSleepContainer.innerHTML = "<h3>Best Sleep Nights (This Week):</h3><ul>" + bestNights.map(function (night) {
        return "<li>" + new Date(night.date).toLocaleDateString() + " - " + night.sleepHours.toFixed(1) + " hrs</li>";
    }).join('') + "</ul>";

    // Display sleep improvement suggestions
    var suggestionsContainer = document.getElementById('sleep-suggestions');
    var sleepSuggestions = generateSleepSuggestions(sleepData);
    suggestionsContainer.innerHTML = "<h3>Suggestions for Better Sleep:</h3><ul>" + sleepSuggestions.map(function (tip) {
        return "<li>" + tip + "</li>";
    }).join('') + "</ul>";
});
