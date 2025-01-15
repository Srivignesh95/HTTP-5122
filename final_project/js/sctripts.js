// Line Chart
const ctx1 = document.getElementById('sleepChart').getContext('2d');
const sleepChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'My Sleep Data',
            data: [8, 6, 7, 9, 5, 7, 8],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart
const ctx2 = document.getElementById('qualityChart').getContext('2d');
const qualityChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Good', 'Moderate', 'Bad'],
        datasets: [{
            label: 'Quality of Sleep',
            data: [60, 20, 20],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
});