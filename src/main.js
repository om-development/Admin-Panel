import './style.css'

  // Get the CSS variable --color-brand and convert it to hex for ApexCharts
  const getBrandColor = () => {
    // Get the computed style of the document's root element
    const computedStyle = getComputedStyle(document.documentElement);
    
    // Get the value of the --color-brand CSS variable
    return computedStyle.getPropertyValue('--color-fg-brand').trim() || "#1447E6";
  };

  const getBrandSecondaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue('--color-fg-brand-subtle').trim() || "#1447E6";
  };

  const brandColor = getBrandColor();
  const brandSecondaryColor = getBrandSecondaryColor();
  
  const options = {
  // enable and customize data labels using the following example, learn more from here: https://apexcharts.com/docs/datalabels/
  dataLabels: {
    enabled: true,
    // offsetX: 10,
    style: {
      cssClass: 'text-xs text-white font-medium'
    },
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 16,
      right: 16,
      top: -26
    },
  },
  series: [
    {
      name: "Developer Edition",
      data: [150, 141, 145, 152, 135, 125],
      color: brandColor,
    },
    {
      name: "Designer Edition",
      data: [64, 41, 76, 41, 113, 173],
      color: brandSecondaryColor,
    },
  ],
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
  legend: {
    show: true
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: brandColor,
      gradientToColors: [brandColor],
    },
  },
  stroke: {
    width: 6,
  },
  xaxis: {
    categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      formatter: function (value) {
        return '$' + value;
      }
    }
  },
  }

  if (document.getElementById("data-labels-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("data-labels-chart"), options);
  chart.render();
  }

    