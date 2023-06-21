export interface DataValues {
  current: number;
  plan: number;
}

export interface ChartProps {
  data: {
    actual: DataValues;
    expected: DataValues;
  };
}
