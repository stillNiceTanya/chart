import type { TooltipLineProps } from './types';

import { formatNumberToLocale } from './helpers';

export const TooltipLine: React.FC<TooltipLineProps> = ({
  lineValues,
  title,
}) => {
  return (
    <div>
      <h6 className='text-neutral-600 text-xs uppercase'>{title}</h6>
      <span className='text-base font-bold text-2xl'>
        <span className='text-primary'>
          {formatNumberToLocale(lineValues.current)} т
        </span>{' '}
        / {formatNumberToLocale(lineValues.plan)} т
      </span>
    </div>
  );
};
