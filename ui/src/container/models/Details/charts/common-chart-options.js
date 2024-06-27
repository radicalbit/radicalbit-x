import moment from 'moment';

const dateFormatter = (value) => moment(+value).format('DD MMM HH.mm');

const xAxisCategoryType = (xAxisData) => {
  const options = {
    xAxis: {
      type: 'category',
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: {
        fontSize: 12,
        interval: 0,
        color: '#9b99a1',
      },
    },
  };
  if (xAxisData) {
    options.xAxis.data = xAxisData;
  }
  return options;
};

const xAxisTimeType = (xAxisData) => {
  const options = {
    xAxis: {
      type: 'time',
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: {
        formatter: dateFormatter,
        fontSize: 12,
        color: '#9b99a1',
      },
    },
  };
  if (xAxisData) {
    options.xAxis.data = xAxisData;
  }
  return options;
};

const xAxisValueType = (xAxisData) => {
  const options = {
    xAxis: {
      type: 'value',
      boundaryGap: true,
      axisLabel: {
        fontSize: 9,
        color: '#9b99a1',
      },
    },
  };
  if (xAxisData) {
    options.xAxis.data = xAxisData;
  }
  return options;
};

const yAxisValueType = (yAxisData) => {
  const options = {
    yAxis: {
      type: 'value',
      boundaryGap: true,
      axisLabel: {
        fontSize: 9,
        color: '#9b99a1',
      },
    },
  };
  if (yAxisData) {
    options.yAxis.data = yAxisData;
  }
  return options;
};

const yAxisCategoryType = (yAxisData) => {
  const options = {
    yAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
      axisLabel: {
        fontSize: 10,
      },
    },
  };
  if (yAxisData) {
    options.yAxis.data = yAxisData;
  }
  return options;
};

const barGridOptions = () => ({
  grid: {
    left: 0,
    right: 20,
    bottom: 0,
    top: 10,
    containLabel: true,
  },
});

const lineGridOptions = () => ({
  grid: {
    bottom: 0,
    top: 16,
    left: 0,
    right: 64,
    containLabel: true,
  },
});

const heatMapGridOptions = () => ({
  grid: {
    bottom: 80,
    top: 0,
    left: 64,
    right: 0,
  },
});

const tooltipOptions = () => ({
  tooltip: {
    trigger: 'axis',
  },
});

const barSeriesOptions = (color) => ({
  itemStyle: { color },
});

// Object to simplify usage of common options
const yAxisOptions = {
  valueType: yAxisValueType,
  categoryType: yAxisCategoryType,
};

const xAxisOptions = {
  categoryType: xAxisCategoryType,
  timeType: xAxisTimeType,
  valueType: xAxisValueType,
};

const gridOptions = {
  barChart: barGridOptions,
  lineChart: lineGridOptions,
  heatMapChart: heatMapGridOptions,
};

const seriesOptions = {
  barChart: barSeriesOptions,
};

export {
  yAxisOptions,
  xAxisOptions,
  seriesOptions,
  gridOptions,
  tooltipOptions,
};
