import * as commonChartOptions from '@Container/models/Details/charts/common-chart-options';

export default function confusionMatrixOptions(dataset, labelClass, colors) {
  let dataMax = 0;
  const heatMapData = dataset.toReversed().reduce((accumulator, datas, yIndex) => accumulator.concat(datas.map((data, xIndex) => {
    if (data > dataMax) {
      dataMax = data;
    }
    return [xIndex, yIndex, data];
  })), []);

  const options = {
    ...commonChartOptions.yAxisOptions.categoryType(labelClass.yAxisLabel),
    ...commonChartOptions.xAxisOptions.categoryType(labelClass.xAxisLabel),
    ...commonChartOptions.gridOptions.heatMapChart(),
    visualMap: {
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      inRange: { color: colors },
      max: dataMax,
    },
    series: [
      {
        name: '',
        type: 'heatmap',
        data: heatMapData,
        label: { show: true },
      },
    ],
  };

  return options;
}
