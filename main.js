// dark light mode code
const modeToggleBtn = document.getElementById("modeToggle");
const HTMLTag = document.querySelector("html");
modeToggleBtn.addEventListener("change", (e) => {
    HTMLTag.classList.toggle("dark")
    HTMLTag.classList.contains("dark") ? document.getElementById("modeLabel").innerHTML = `<i class="fa-solid fa-sun"></i>` : document.getElementById("modeLabel").innerHTML = `<i class="fa-solid fa-moon"></i>`;
})
//chart 

const options = {
    chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        enabled: true,
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 6,
    },
    grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
            left: 2,
            right: 2,
            top: 0
        },
    },
    series: [
        {
            name: "New users",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB",
        },
    ],
    xaxis: {
        categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
        labels: {
            show: true, // Show x-axis labels
        },
        axisBorder: {
            show: true, // Show x-axis border
        },
        axisTicks: {
            show: true, // Show x-axis ticks
        },
        title: {
            text: 'Date' // X-axis title
        }
    },
    yaxis: {
        show: true, // Show y-axis
    },
}

if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("area-chart"), options);
    chart.render();
}
