import { CHART_COLOR } from '@Container/models/Details/constants';
import { numberFormatter } from '@Src/constants';
import * as commonChartOptions from '@Container/models/Details/charts/common-chart-options';

export default function chartOptions(title, referenceDataset, currentDataset) {
  const yAxisLabel = currentDataset.map(({ name }) => name);

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
        name: 'reference',
        type: 'bar',
        color: CHART_COLOR.REFERENCE_LIGHT,
        label: {
          show: true,
          position: 'insideRight',
          fontWeight: 'bold',
          color: CHART_COLOR.REFERENCE_DARK,
          formatter: (el) => (el.data.count > 0) ? `${el.data.count} (${numberFormatter().format(el.data.percentage)}%)` : '',
        },
        data: referenceDataset.map(({ count, percentage }) => ({ percentage, count, value: count })),
      },
      {
        name: title,
        type: 'bar',
        color: CHART_COLOR.CURRENT_LIGHT,
        label: {
          show: true,
          position: 'insideRight',
          fontWeight: 'bold',
          color: CHART_COLOR.CURRENT_DARK,
          formatter: (el) => (el.data.count > 0) ? `${el.data.count} (${numberFormatter().format(el.data.percentage)}%)` : '',

        },
        data: currentDataset.map(({ count, percentage }) => ({ percentage, count, value: count })),
      },
    ],
  };
}
