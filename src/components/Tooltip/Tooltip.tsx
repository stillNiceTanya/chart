import { ChartProps } from '../types';
import { TooltipLine } from '../TooltipLine';

type TooltipProps = ChartProps;

export const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  const { actual, expected } = data;

  return (
    <div className="px-3 py-5 flex flex-col gap-1 bg-white w-max">
      <TooltipLine lineValues={actual} title="Факт / План (на текущую дату)" />
      <TooltipLine lineValues={expected} title="Прогноз / План" />
    </div>
  );
};
