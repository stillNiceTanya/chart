export const calculateChartActivePercentage = (
  actualValue: number,
  expectedValue: number
): number => {
  return Math.round((actualValue / expectedValue) * 100);
};

export const calculateChartActiveDegree = (percentage: number): number =>
  Math.round((percentage * 360) / 100);
