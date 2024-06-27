import { numberFormatter } from '@Src/constants';
import { CHART_COLOR } from '@Container/models/Details/constants';
import * as commonChartOptions from '@Container/models/Details/charts/common-chart-options';

export default function lineChartOptions(title, color, currentDataset, referenceDataset) {
  const series = [
    {
      name: title,
      type: 'line',
      lineStyle: {
        width: 2,
        color: '#73B2E0',
      },
      data: currentDataset.map(({ timestamp, value }) => [timestamp, numberFormatter().format(value)]),
      symbol: 'none',
    },
  ];
  if (referenceDataset) {
    series.push({
      name: 'Reference',
      type: 'line',
      endLabel: {
        show: true,
        color: CHART_COLOR.REFERENCE,
        formatter: ({ value }) => `Reference\n${value[1]}`,
      },
      color: CHART_COLOR.REFERENCE,
      lineStyle: {
        width: 2,
        type: 'dotted',
        color: CHART_COLOR.REFERENCE,
      },
      data: referenceDataset.map(({ timestamp, value }) => [timestamp, numberFormatter().format(value)]),
      symbol: 'none',
    });
  }

  const options = {
    color: [color],
    ...commonChartOptions.tooltipOptions(),
    ...commonChartOptions.yAxisOptions.valueType(),
    ...commonChartOptions.xAxisOptions.timeType(),
    ...commonChartOptions.gridOptions.lineChart(),
    series,
  };

  return options;
}
