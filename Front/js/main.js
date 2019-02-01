
const addRow = (value) => {
  keys.push(value);
  value = '';
}

const afficher_aide = (aide) => {
    if(aide.style.display == "none") aide.style.display ="block";
    else aide.style.display = "none";
}
  
/* Affichage des graphiques */
const setupLineChart = () => {
  let lineChartCanvas = document.getElementById("line-chart-canvas").getContext("2d");
  return new Chart(lineChartCanvas, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Avr", "Mai","Juin"],
      datasets: [{
        label: "Requêtes d'API",
        backgroundColor: "rgba(113,0,255,0.2)",
        borderColor: "rgba(0,0,255,1)",
        borderWidth: 1,
        data: [1, 3, 4, 7, 5, 6]
        }]
    },
    options: {
      responsive: false,
      title: {
         display: true,
         position: 'top',
         text: 'Trafic',
         fontSize: 20,
         fontColor:'#000'
      },
      legend: {
          display: true,
          position: 'bottom',
           labels: {
                fontColor: '#000'
            }
      },
      scales: { yAxes: [{ ticks: { min: 0, max: 10, stepSize: 2} }] }
    }
  });
}

const setupChartError = () => {
  let lineChartError = document.getElementById("line-chart-error").getContext("2d");
  return new Chart(lineChartError, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin"],
      datasets: [{
        label: "Pourcentage d'erreurs",
        backgroundColor: "rgba(113,0,255,0.2)",
        borderColor: "rgba(255,0,255,1)",
        borderWidth: 1,
        }]
    },
    options: {
      responsive: false,
      title: {
         display: true,
         position: 'top',
         text: 'Erreurs',
         fontSize: 20,
         fontColor:'#000'
      },
      legend: {
          display: true,
          position: 'bottom'
      },
      scales: {
            yAxes: [{
                ticks: {
                    min: 0, max: 100, stepSize: 20,
                    // Include a % sign after values on y-axis
                    callback: (value, index, values) => {
                        return  `${value} %`;
                    }
                }
            }]
        }
    }
  });
}



$(document).ready(function() {

 var lineChart  = setupLineChart();
 var errorChart = setupChartError();



});
