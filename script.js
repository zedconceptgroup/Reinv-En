document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('reinvestmentChart').getContext('2d');

    const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
    const investmentAmounts = [10000, 15000, 25000, 50000, 100000]; // Initial Investment in USD
    const totalEarnings = [15400, 23100, 37500, 76500, 160000]; // Total Gains in USD

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [
                {
                    label: "Initial Investment ($)",
                    data: investmentAmounts,
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                },
                {
                    label: "Total Earnings ($)",
                    data: totalEarnings,
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Amount ($)"
                    }
                }
            }
        }
    });
});
