import type { ChartProps } from '../types';

import {
  calculateChartActiveDegree,
  calculateChartActivePercentage,
} from './helpers';

export const Chart: React.FC<ChartProps> = ({ data }) => {
  const { actual, expected } = data;

  const chartPercentage = calculateChartActivePercentage(
    actual.current,
    expected.current
  );

  const chartActiveDegree = calculateChartActiveDegree(chartPercentage);

  return (
    <div className='rounded-full w-52 h-52 relative flex items-center justify-center border border-4 border-primary'>
      <div
        className='rounded-full w-32 h-32 flex items-center justify-center'
        style={{
          background: `conic-gradient(from ${
            90 - chartActiveDegree
          }deg, #fbb53b ${chartActiveDegree}deg, #505050 ${chartActiveDegree}deg)`,
        }}
      >
        <div className='rounded-full flex items-center justify-center bg-white w-20 h-20'>
          <span className='text-2xl z-10 font-bold text-primary'>
            {chartPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
