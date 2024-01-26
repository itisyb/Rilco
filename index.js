window.onload = async () => {
    let emissionChartCo2; // This will hold the chart instance
    let totalShipments; // This will hold the chart instance
    let carbonEmission; // This will hold the chart instance
    let avgDistance
    let avgWeight

    Wized.data.listen("v.emission_chart_labels", async () => {    
        const emission_labels = await Wized.data.get("v.emission_chart_labels");
        const emission_data = await Wized.data.get("v.emission_chart_data");

        // Destroy the existing chart if it exists
        if (emissionChartCo2) {
            emissionChartCo2.destroy();
        }

        // Get the canvas context
        const emissionCtx = document.getElementById('emissionChart').getContext('2d');

        // Create a new chart
        emissionChartCo2 = new Chart(emissionCtx, {
            type: 'bar',
            data: {
                labels: emission_labels,
                datasets: [{
                    label: 'Emission Co2e',
                    data: emission_data,
                    backgroundColor: [
                        'rgba(83, 31, 231, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83, 31, 231, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
    });

    Wized.data.listen("v.shipment_chart_labels", async () => {    
        const shipment_labels = await Wized.data.get("v.shipment_chart_labels");
        const shipment_data = await Wized.data.get("v.shipment_chart_data");

        // Destroy the existing chart if it exists
        if (totalShipments) {
            totalShipments.destroy();
        }

        // Get the canvas context
        const shipmentCtx = document.getElementById('totalShipments').getContext('2d');

        // Create a new chart
        totalShipments = new Chart(shipmentCtx, {
            type: 'bar',
            data: {
                labels: shipment_labels,
                datasets: [{
                    label: 'Shipment',
                    data: shipment_data,
                    backgroundColor: [
                        'rgba(83, 31, 231, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83, 31, 231, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
    });

    Wized.data.listen("v.carbon_chart_labels", async () => {    
        const carbon_labels = await Wized.data.get("v.carbon_chart_labels");
        const carbon_data = await Wized.data.get("v.carbon_chart_data");

        // Destroy the existing chart if it exists
        if (carbonEmission) {
            carbonEmission.destroy();
        }

        // Get the canvas context
        const carbonEmissionCTX = document.getElementById('carbonEmission').getContext('2d');

        // Create a new chart
        carbonEmission = new Chart(carbonEmissionCTX, {
            type: 'bar',
            data: {
                labels: carbon_labels,
                datasets: [{
                    label: 'Carbon Emission',
                    data: carbon_data,
                    backgroundColor: [
                        'rgba(83, 31, 231, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83, 31, 231, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
    });

    Wized.data.listen("v.avgweight_chart_labels", async () => {    
        const avgweight_labels = await Wized.data.get("v.avgweight_chart_labels");
        const avgweight_data = await Wized.data.get("v.avgweight_chart_data");

        // Destroy the existing chart if it exists
        if (avgWeight) {
            avgWeight.destroy();
        }

        // Get the canvas context
        const weightCtx = document.getElementById('avgWeight').getContext('2d');

        // Create a new chart
        avgWeight = new Chart(weightCtx, {
            type: 'bar',
            data: {
                labels: avgweight_labels,
                datasets: [{
                    label: 'Average Weight',
                    data: avgweight_data,
                    backgroundColor: [
                        'rgba(83, 31, 231, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83, 31, 231, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
    });

    Wized.data.listen("v.avgdistance_chart_labels", async () => {    
        const avgdistance_labels = await Wized.data.get("v.avgdistance_chart_labels");
        const avgdistance_data = await Wized.data.get("v.avgdistance_chart_data");

        // Destroy the existing chart if it exists
        if (avgDistance) {
            avgDistance.destroy();
        }

        // Get the canvas context
        const distanceCtx = document.getElementById('avgDistance').getContext('2d');

        // Create a new chart
        avgDistance = new Chart(distanceCtx, {
            type: 'bar',
            data: {
                labels: avgdistance_labels,
                datasets: [{
                    label: 'Average Distance',
                    data: avgdistance_data,
                    backgroundColor: [
                        'rgba(83, 31, 231, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(83, 31, 231, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 2
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
    });
};
