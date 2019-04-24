<template>
    <canvas id="chart"></canvas>
</template>

<script>
  import DatabaseHelper from '@/providers/DatabaseHelper';

  import Chart from 'chart.js';

  export default {
    name: 'home',
    mounted() {
      (new DatabaseHelper()).getData().then((data) => {
        let labels = [];
        let datasets = [];
        data.forEach((row) => {
          if (row.age !== undefined) {
            labels.push(row.age);
            datasets.push(row);
          }
        });


        const canvas = document.querySelector('#chart');
        const chart = new Chart(canvas, {
          type: 'bar',
          title: {
            display: true,
            text: 'Chart showing age by location'
          },
          data: {
            labels: this.filterLabels(labels),
            datasets: this.createDataSets(datasets)
          },
          options: {
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                }
              }]
            }
          }
        });
      });
    },
    methods: {
      filterLabels(labels) {
        return labels.filter((value, index, self) => {
          return self.indexOf(value) === index;
        })
        .map((value) => {
          return value.toString();
        })
        .reverse();
      },
      createDataSets (data) {
        let dataSet = {};
        let dataCount = {};
        data.forEach((row) => {
          if (Object.keys(dataCount).indexOf(row.age.toString()) === -1) {
            dataCount[row.age.toString()] = 0;
          }
          dataCount[row.age.toString()]++;
        });
        dataSet['label'] = "Age Range";
        dataSet['data'] = Object.values(dataCount);
        dataSet['backgroundColor'] = Object.values(dataCount).map((v) => {
          return this.rgb(v, 65, 87);
        });
        return [dataSet];

      },
      rgb(r, g, b) {
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        return ['rgb(', r, ',', g, ',', b, ')'].join('');
      }

    }
  };
</script>
