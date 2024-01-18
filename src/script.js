import Chart from "chart.js/auto";
// import { Color } from "chart.js";

import { toCurrency } from "./modules/toCurrency";

const chart1 = document.querySelector("#chart1");

new Chart(chart1, {
  type: "bar",
  data: {
    labels: [""],
    datasets: [
      {
        label: "Meta Mensal",
        data: [toCurrency(150000)],
      },
      {
        label: "Fechado",
        data: [toCurrency(150000)],
      },
      {
        label: "Falta Fechar",
        data: [toCurrency(150000)],
      },
    ],
  },
});

new Chart(roi, {
  type: "doughnut",
  data: {
    labels: ["Orçamentos Realizados", "Orçamentos Fechados"],
    datasets: [
      {
        label: "Orçamentos Realizados",
        data: [toCurrency(150000), 147602],
      },
    ],
  },
});

new Chart(roi, {
  type: "bar",
  data: {
    labels: [""],
    datasets: [
      {
        label: "Orçamentos Realizados",
        data: [369620],
      },
      {
        label: "Orçamentos Fechados",
        data: [147602],
      },
    ],
  },
});
