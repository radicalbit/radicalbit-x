import { CHART_COLOR } from '@Container/models/Details/constants';
import { numberFormatter } from '@Src/constants';
import * as commonChartOptions from '@Container/models/Details/charts/common-chart-options';

export default function chartOptions(title, dataset) {
  const yAxisLabel = dataset.map(({ name }) => name);

  return {
    ...commonChartOptions.gridOptions.barChart(),
    ...commonChartOptions.xAxisOptions.valueType(),
    ...commonChartOptions.yAxisOptions.categoryType(yAxisLabel),
    emphasis: { disabled: true },
    barCategoryGap: '21%',
    overflow: 'truncate',
    lineOverflow: 'truncate',
    series: [
      {
        name: title,
        type: 'bar',
        color: CHART_COLOR.REFERENCE_LIGHT,
        emphasis: { focus: 'series' },
        label: {
          show: true,
          position: 'insideRight',
          fontWeight: 'bold',
          formatter: (el) => (el.data.count > 0) ? `${el.data.count} (${numberFormatter().format(el.data.percentage)}%)` : '',
        },
        data: dataset.map(({ count, percentage }) => ({ percentage, count, value: count })),
      },
    ],
  };
}
