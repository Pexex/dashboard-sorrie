export function createChart(chart, type) {
  return new Chart(chart, {
    type: type,
    data: data,
  });
}
